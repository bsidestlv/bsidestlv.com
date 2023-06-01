const axios = require("axios");
const { unlinkSync, writeFileSync } = require("fs");
const { sync: glob } = require("glob");
const { Logger, LogLevel, colorEmojiConfig } = require("plop-logger");

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

const baseurl = "https://cfp.bsidestlv.com/api/events/bsidestlv-2023";

var speakers = {};
var talks = {};

async function cfpApi(url, list = []) {
  try {
    response = await axios.get(url, {
      headers: { Authorization: `Token ${process.env.PRETALX_TOKEN}` },
    });
    retrivedList = list.concat(response.data.results);
    if (response.data.next) {
      return cfpApi(response.data.next, retrivedList);
    } else {
      return retrivedList;
    }
  } catch (error) {
    logger.error(`Failed fetching CFP data - ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

logger.info("Fetching speakers from pretalx");
cfpApi(`${baseurl}/speakers/`)
  .then((results) => {
    if (!results) {
      logger.error("no results, cant be..");
      process.exit();
    }
    results.map((speaker) => {
      console.log(JSON.stringify(speaker, null, 2))
      speaker.key = speaker.name.replace(/[^\w]/g, "_").toLowerCase();
      speaker.questions = {};
      speaker.answers.map((answer) => {
        key = answer.question.question.en.replace(/[^\w]/g, "_").toLowerCase();
        speaker.questions[key] = answer.answer;
      });
      speaker.social = "";
      if (speaker.questions.twitter_handle_or_linkedin_page) {
        socialUrl = speaker.questions.twitter_handle_or_linkedin_page;
        social = socialUrl.match(/(\w+)\.\w+\//);
        if (social) {
          speaker.social = `- icon: ${social[1]}\n  link: "${socialUrl}"`;
        }
      }
      speakers[speaker.code] = speaker;
    });
  })
  .then(() => {
    logger.info("Fetching talks from pretalx");
    cfpApi(`${baseurl}/talks/`).then((results) => {
      if (!results) {
        logger.error("no results, cant be..");
        process.exit();
      }

      results.map((session) => {
        talks[session.code] = session;

        strSpeakers = "";
        session.speakers.map((speaker) => {
          speaker = speakers[speaker.code];
          if (!speaker) return;
          console.log(JSON.stringify(speaker, null, 2))
          let md = `
---
key: ${speaker.key}
name: ${speaker.name}
socials:
${speaker.social}
photoURL: "${speaker.avatar}"
---

${speaker.biography}
            `.replace(/                  /g, "");
          logger.info("Writing ", speaker.key);
          writeFileSync(`content/speakers/${speaker.key}.md`, md, {
            flag: "w",
          });

          strSpeakers += `  - ${speaker.key}\n`;
        });
        session.speakers = strSpeakers;
      });

      logger.info("Creating talks");
      for (let [code, session] of Object.entries(talks)) {
        console.log(JSON.stringify(session, null, 2))
        talk_name = session.title.replace(/[^\w]/g, "_").toLowerCase();
        start = session.slot.start;
        end = session.slot.end;
        duration = session.duration;
        speakers = "";
        let md = `
---
title: '${session.title.replace(/'/g, "''")}'
talkType: ${session.submission_type.en}
date: ${start}
start: ${start}
end: ${end}
duration: ${duration}
tags:
  - ${session.submission_type.en}
speakers:
${session.speakers}
---
                ${session.abstract}`.replace(/                /g, "");
        logger.info("Writing ", talk_name);
        writeFileSync(`content/agenda/${talk_name}.md`, md, { flag: "w" });
      }
    });
  });
