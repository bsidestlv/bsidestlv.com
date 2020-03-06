const {writeFileSync} = require('fs');
const path = require('path');
const {sync: glob} = require('glob');
const {Logger, LogLevel, colorEmojiConfig} = require('plop-logger');
const sass = require('node-sass');
const rimraf = require('rimraf');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('styles');
logger.level = LogLevel.All;

// Cleaning
const cssFiles = `static/styles/*.css`;
logger.info('Remove files', cssFiles);
rimraf.sync(cssFiles);

// Scss
const scssFiles = `src/styles/*.scss`;
logger.info('Compile CSS files', scssFiles);
const indentedSyntax = true;
const outputStyle = 'expanded';

glob(scssFiles)
  .forEach(file => {
    const {name} = path.parse(file);
    const output = path.format({dir: 'static/styles', name, ext: '.css'});
    logger.debug(`Compile to ${output} to`, file);

    const result = sass.renderSync({file, indentedSyntax, outputStyle});
    if (result.css) {
      writeFileSync(output, result.css, {flag: 'w'});
    } else {
      logger.error("Oops", result);
      logger.dump(result);
    }
  });
