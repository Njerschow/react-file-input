import '@brainhubeu/react-file-input/dist/react-file-input.css';

const { default: FileInput } = (() => {
  if (!global.window) {
    global.window = {};
  }
  // if ('__RC_ENV__' === 'development') {
    console.log('connecting with local react-carousel source code');
    return require('../../src');
  // } else {
  //   console.log('connecting with @brainhubeu/react-carousel installed in node_modules');
  //   return require('@brainhubeu/react-file-input');
  // }
})();


export { FileInput };
