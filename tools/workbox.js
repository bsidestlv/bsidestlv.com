const workboxBuild = require('workbox-build');

const buildSW = () =>
  workboxBuild.injectManifest({
    swSrc: 'themes/devfest-theme-hugo/static/sw.js',
    swDest: 'public/sw.js',
    globDirectory: 'public',
    globPatterns: ['**\/*.{html,json,png,xml,ico,txt,svg,jpg,webp,jpeg,ics,js,css}']
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(msg => console.warn(msg));
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });

buildSW();
