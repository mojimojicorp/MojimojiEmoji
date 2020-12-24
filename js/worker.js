importScripts('./dist/twemoji.min.js');

onmessage = (e) => {
  e.data.map((emoji) => {
    return emoji.char = twemoji.parse(emoji.char);
  });

  postMessage(e.data);
};
