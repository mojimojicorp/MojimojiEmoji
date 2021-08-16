// eslint-disable-next-line no-undef
importScripts('./js/dist/twemoji.min.js');

onmessage = (e) => {
  e.data.forEach((emoji) => {
    emoji.char = twemoji.parse(emoji.char);
  });

  postMessage(e.data);
};

