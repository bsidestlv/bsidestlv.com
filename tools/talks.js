const request = require('request');
const {unlinkSync, writeFileSync} = require('fs');
const {sync: glob} = require('glob');
const {Logger, LogLevel, colorEmojiConfig} = require('plop-logger');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('talks');
logger.level = LogLevel.All;

const oldFiles = [`content/sessions/*.md`, `content/speakers/*.md`, `content/schedule/*.md`];
logger.info('Deleting old content from ', oldFiles);

oldFiles.flatMap(files => glob(files, {'ignore': ['**/_index.md']})).map((file) => unlinkSync(file))


var speakers = {}
var sessions = {}

logger.info('Fetching talks from pretalx')
request.get({
    url: 'https://cfp.bsidestlv.com/api/events/19/talks/',
    json: true,
    headers: {bearer: '2fb14f6632d2f3267a523fe8b82c2fb1c17e2664'} 
}, (err, response, body) => {
  if (err) {
    throw err
  }

  body.results.map( session => {
    sessions[session.code] = session
    
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

  logger.info('Creating sessions')
  for (let [code, session] of Object.entries(sessions)) {
    name = session.title.replace(/\s/g, '_').toLowerCase()
    speakers = ''
    let md = `
---
title: "${session.title}"
talkType: ${session.submission_type.en}
tags:
  - ${session.submission_type.en}
speakers:
${session.speakers}
---
${session.abstract}

`
    logger.debug('Writing ', name)
    writeFileSync(`content/sessions/${name}.md`, md, {flag: 'w'});
  }

});




// const data = oldFiles.flatMap(files => glob(files, ))
//   .map(file => {
//       const parts = file.split('/');
//       const id = parts[parts.length - 1].split('.')[0];
//       logger.debug('adding', id);
//       return readFileSync(file, 'utf8')
//         .replace(`<svg xmlns="http://www.w3.org/2000/svg"`, `\t<symbol id="${id}"`)
//         .replace(`</svg>`, `\t</symbol>`);
//     }
//   );

// const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" class="visually-hidden">
//   ${data.join('\n')}
// </svg>`;

// const file = 'static/icons.svg';
// logger.info('Generate SVG Icons', file);
// writeFileSync(file, svg, {flag: 'w'});
