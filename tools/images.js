const path = require('path');
const {sync: glob} = require('glob');
const sharp = require('sharp');
const rimraf = require('rimraf');
const {Logger, LogLevel, colorEmojiConfig} = require('plop-logger');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('images');
logger.level = LogLevel.All;

const failure = msg => err => {
  logger.error(msg);
  console.error(err);
};

const baseWidths = [1140, 960, 720, 540];

// Cleanup previous images
const imgs = baseWidths.flatMap(width =>
  ([`static/images/**/*-${width}.jpg`, `static/images/**/*-${width}.webp`])
);
imgs.push(`static/images/*.webp`);
imgs.forEach(files => {
  logger.info(`Cleanup previous images`, files);
  rimraf.sync(files);
});

// Resize and convert
const imagesFiles = [
  {files: `static/images/album/**/*.*`, format: 'webp'},
  {files: `static/images/backgrounds/*.*`, format: 'webp'},
  {files: `static/images/blog/*.*`, format: 'webp'},
  {files: `static/images/kids/*.*`, format: 'webp'},
  {files: `static/images/konfetti/*.*`, format: 'webp'},
  {files: `static/images/logos/*_text*.*`, opt: {width: 640}, format: 'png'},
  {files: `static/images/partners/**/*.*`, opt: {height: 180}, format: 'webp'},
  {files: `static/images/partners/**/*.svg`, format: 'png'},
  {files: `static/images/partners/**/*.jpg`, format: 'png'},
  {files: `static/images/team/*.*`, opt: {width: 150}, format: 'webp'},
  {files: `static/images/team/*.png`, format: 'jpg'},
  {files: `static/images/wtf/*.*`, format: 'webp'},
  {files: `static/images/*.jpg`, format: 'webp'}
];


imagesFiles.forEach(({files, opt, format}) => {
  logger.info(`Deal with ${files}: format: ${format}, with ${opt ? JSON.stringify(opt) : ''}`);
  glob(files)
    .forEach(file => {
      const {dir, name, ext} = path.parse(file);
      if (ext.endsWith(format)) {
        logger.debug(`Skip ${file}, already at format ${format}`);
      } else {
        const output = path.format({dir, name, ext: '.' + format});
        const msg = opt ? `resize ${file} with ${JSON.stringify(opt)}` : `convert ${file} to format ${format}`;

        const src = opt ? sharp(file).resize(opt) : sharp(file);
        src.toFile(output)
          .catch(failure(`Fail to ${msg}`))
          .then(() => logger.info(msg, '[OK]'));
      }

    });
});


// Create alternative image in different resolutions
const imagesAltFiles = [
  `static/images/backgrounds/*.jpg`,
  `static/images/kids/*.jpg`,
  `static/images/wtf/*.jpg`,
  `static/images/social-share.jpg`,
  `static/images/konfetti/logo.jpg`
];

imagesAltFiles.forEach(files => {
  logger.info(`Deal with ${files} and widths: ${baseWidths}`);
  glob(files)
    .forEach(file => {
      const {dir, name} = path.parse(file);

      baseWidths.forEach(width => {
        const output = path.format({dir, name: `${name}-${width}`, ext: `.webp`});

        sharp(file).resize({width})
          .toFile(output)
          .catch(failure(`Fail to generate ${output}`))
          .then(() => logger.info(`Generate ${output}`, '[OK]'));
      });

    });
});

// Background in JPG
glob(`static/images/backgrounds/*.jpg`)
  .forEach(file => {
    const {dir, name, ext} = path.parse(file);
    baseWidths.forEach(width => {
      const output = path.format({dir, name: `${name}-${width}`, ext});
      sharp(file)
        .resize({width: width})
        .toFile(output)
        .catch(failure(`Fail to generate ${output}`))
        .then(() => logger.info(`Generate ${output}`, '[OK]'));
    });
  });

glob(`static/images/blog/*.*`)
.forEach(file => {
  const ext = '.webp';
  const {dir, name, ext: baseExt} = path.parse(file);
  baseWidths.forEach(width => {
    const output = path.format({dir, name: `${name}-${width}`, ext});
    sharp(file)
      .resize({width: width})
      .toFile(output)
      .catch(failure(`Fail to generate ${output}`))
      .then(() => logger.info(`Generate ${output}`, '[OK]'));
  });
  
    [ext, baseExt].forEach (ext => {
      const output = path.format({dir, name: `${name}-mini`, ext});
      sharp(file)
        .resize({width: 256})
        .toFile(output)
        .catch(failure(`Fail to generate ${output}`))
        .then(() => logger.info(`Generate ${output}`, '[OK]'));
    });

});

// Albums
glob(`static/images/album/**/*.jpg`)
  .forEach(file => {
    const {dir, name} = path.parse(file);
    baseWidths.forEach(width => {
      const output = path.format({dir, name: `${name}-${width}`, ext: `.webp`});
      sharp(file)
        .resize({width: width / 5 * 2}) // half
        .toFile(output)
        .catch(failure(`Fail to generate ${output}`))
        .then(() => logger.info(`Generate ${output}`, '[OK]'));
    });
  });

// Map
baseWidths.forEach(width => {
  const output = path.format({dir: 'static/images', name: `map-${width}`, ext: `.webp`});
  sharp(`static/images/map.jpg`)
    .resize({width, height: 480, fit: 'cover'})
    .toFile(output)
    .catch(failure(`Fail to generate ${output}`))
    .then(() => logger.info(`Generate ${output}`, '[OK]'));
});
