const puppeteer = require('puppeteer');
const {Logger, LogLevel, colorEmojiConfig} = require('plop-logger');
const handler = require('serve-handler');
const http = require('http');

Logger.config = colorEmojiConfig;
Logger.config.defaultLevel = LogLevel.Debug;
const logger = Logger.getLogger('pdf');

// Configuration
const outputs = {
  'schedule/index.html': 'public/schedule/schedule-en.pdf',
  'fr/schedule/index.html': 'public/schedule/schedule-fr.pdf',
};
const serverConf = {
  port: 8765,
  options: {
    "public": "./public"
  }
};
const browserConf = {
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  defaultViewport: {width: 1280, height: 1700},
  margin: {
    top: "0cm",
    right: "0cm",
    bottom: "0cm",
    left: "0cm"
  },
  devtools: false
};

async function startServer({port, options}) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) =>
      handler(request, response, options));

    server.listen(port, err => {
      if (err) {
        logger.error('Fail to start server', err);
        reject(err);
      } else {
        logger.info('Server started', () => `http://localhost:${port}`);
        resolve(server);
      }
    });
  });
}

async function stopServer(server) {
  return new Promise((resolve, reject) => {
    logger.info('Stopping server...');
    server.close(err => {
      if (err) {
        logger.error('Fail to stop server', err);
        reject(err);
      } else {
        logger.info('Server stopped');
        resolve();
      }
    });
  });
}

async function cleanupBeforePrint(page) {
  const toHide = [
    'body > header',
    'body > footer',
    'main .hero',
  ];

  await page.$$eval(toHide.join(','), elts =>
    elts.forEach(elt =>
      elt && elt.parentNode ? elt.parentNode.removeChild(elt) : elt));

  await page.addStyleTag({
    content: '@page { size: auto; }',
  });
}

async function renderPdf(page, file, output) {
  const url = `http://localhost:${serverConf.port}/${file}`;
  logger.info("go to", url);
  const pageResponse = await page.goto(url, {waitUntil: 'networkidle2'});
  logger.debug("done", pageResponse.statusText());

  await cleanupBeforePrint(page);

  logger.info('export pdf', output);
  const format = 'A3';
  const scale = .4;
  const printBackground = true;
  return page.pdf({path: output, format, scale, printBackground});
}

(async () => {
  const server = await startServer(serverConf);

  logger.info("launch puppeteer browser");
  const browser = await puppeteer.launch(browserConf);
  try {
    logger.info("open new page");
    const page = await browser.newPage();
    logger.debug("opened new page");

    for (let [file, output] of Object.entries(outputs)) {
      await renderPdf(page, file, output);
    }

    logger.debug("pdf done");

  } catch (e) {
    console.error(e);
    logger.error('Oops!', e);
  } finally {
    logger.info('close puppeteer browser');
    await browser.close();
    await stopServer(server);
  }
})();
