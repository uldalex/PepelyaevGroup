/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
   // './splide.min.js'
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/Geometria-Bold.woff2': 'fonts/',
    'src/fonts/Geometria-Light.woff2': 'fonts/',
    'src/fonts/Geometria-Medium.woff2': 'fonts/',
    'src/fonts/Geometria-Regular.woff2': 'fonts/',
    'src/fonts/Geometria-Italic.woff2': 'fonts/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
