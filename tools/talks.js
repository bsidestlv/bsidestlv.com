const request = require('request');
const {unlinkSync, writeFileSync} = require('fs');
const {sync: glob} = require('glob');
const {Logger, LogLevel, colorEmojiConfig} = require('plop-logger');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('talks');
logger.level = LogLevel.All;

const oldFiles = [`content/agenda/*.md`, `content/speakers/*.md`, `content/schedule/*.md`];
logger.info('Deleting old content from ', oldFiles);

oldFiles.flatMap(files => glob(files, {'ignore': ['**/_index.md']})).map((file) => unlinkSync(file))


var speakers = {}
var talks = {}

logger.info('Fetching talks from pretalx')
request.get({
    url: 'https://cfp.bsidestlv.com/api/events/20/talks/',
    json: true,
    headers: {authorization: `Token ${process.env.PRETALX_TOKEN}`}
}, (err, response, body) => {
  if (err) {
    throw err
  }
  if (!body.results.length) {
    throw 'no results, cant be..'
  }

  body.results.map( session => {
    talks[session.code] = session
    
    strSpeakers = ''
    session.speakers.map( speaker => {
      speakers[speaker.code] = speaker
      name = speaker.name.replace(/\s/g, '_').toLowerCase()
      strSpeakers += `  - ${name}\n`
    })
    session.speakers = strSpeakers
  })

  logger.info('Creating speakers')
  for (let [code, speaker] of Object.entries(speakers)) {
    name = speaker.name.replace(/\s/g, '_').toLowerCase()
    let md = `
---
key: ${name}
name: ${speaker.name}
photoURL: ${speaker.avatar}
---

${speaker.biography}
`
    logger.debug('Writing ', name)
    writeFileSync(`content/speakers/${name}.md`, md, {flag: 'w'});
  }

  logger.info('Creating talks')
  for (let [code, session] of Object.entries(talks)) {
    name = session.title.replace(/\s/g, '_').toLowerCase()
    start = session.slot.start
    end = session.slot.end
    duration = session.duration
    speakers = ''
    let md = `
---
title: "${session.title}"
talkType: ${session.submission_type.en}
start: ${start}
end: ${end}
duration: ${duration}
tags:
  - ${session.submission_type.en}
speakers:
${session.speakers}
---
${session.abstract}

`
    logger.debug('Writing ', name)
    writeFileSync(`content/agenda/${name}.md`, md, {flag: 'w'});
  }

});
