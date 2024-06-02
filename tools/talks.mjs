import { sync as glob } from "glob";
import { unlinkSync, writeFileSync } from "node:fs";
import { LogLevel, Logger, colorEmojiConfig } from "plop-logger";

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger("talks");
logger.level = LogLevel.All;

const oldFiles = [
  `content/agenda/*.md`,
  `content/speakers/*.md`,
];
logger.info("Deleting old content from ", oldFiles);

oldFiles
  .flatMap((files) => glob(files, { ignore: ["**/_index.md"] }))
  .map((file) => unlinkSync(file));

process.exit()
// const baseurl = "";


logger.info("Fetching speakers");
const speakers = await fetch(`${baseurl}/Speakers/`)
  .then((res) => res.json())
  .then((results) => results.map((speaker) => {

    speaker.key = speaker.fullName.replace(/[^\w]/g, "_").toLowerCase();
    const md = `---
key: ${speaker.key}
name: ${speaker.fullName}
socials:
${speaker.links.map(link => `- icon: ${link.linkType.toLowerCase()}\n  link: "${link.url}"`).join("\n")}
photoURL: "${speaker.profilePicture}"
---

${speaker.bio}`
    logger.info("Writing ", speaker.key);
    writeFileSync(`content/speakers/${speaker.key}.md`, md, {
      flag: "w",
    });


    return [speaker.id, {
      ...speaker,
    }]
  }
  )).then((speakers) => Object.fromEntries(speakers));

if (!speakers) {
  logger.error("no results, cant be..");
  process.exit();
}

logger.info("Fetching talks");
await fetch(`${baseurl}/Sessions`)
  .then((res) => res.json())
  .then((sessions) => sessions[0].sessions.map((session) => {
    const key = session.title?.replace(/[^\w]/g, "_").toLowerCase();
    const md = `
---
title: '${session.title.replace("'", "''")}'
date: ${session.startsAt ?? new Date().toISOString()}
start: ${session.startsAt ?? new Date().toISOString()}
end: ${session.endsAt ?? new Date().toISOString()}
duration: ${session.startsAt ?? 0 - session.endsAt ?? 0}
tags:
- talk
speakers:
${session.speakers?.map(speaker => `- ${speakers[speaker.id].key}`).join("\n")}
---
${session.description}`;
    logger.info("Writing ", key);
    writeFileSync(`content/agenda/${key}.md`, md, { flag: "w" });


    return [session.id, {
      ...session,
      key,
    }]
  }));

