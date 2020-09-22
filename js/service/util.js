const Util = {
  includeJS: (jsFilePath) => {
    const js = document.createElement('script');

    // js.type = 'text/javascript';
    js.type = 'module';
    js.src = jsFilePath;

    document.body.appendChild(js);
  },
};

export default Util;
