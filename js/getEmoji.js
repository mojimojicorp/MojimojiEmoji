/* eslint-disable import/extensions */
import Doc from './service/doc.js';
import setGrid from './setGrid.mjs';
import { autocopy } from './copy/autocopy.mjs';
import { onecopy } from './copy/onecopy.mjs';
import copyEvent from './copy/copyEvent.mjs';
import renderRecent from './recent/renderRecent.mjs';

const copySetting = localStorage.getItem('copy');

// Emoji JSON파일 불러오기
const getJSON = (path, success, error) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else if (error) {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
};

const attachEmoji = (emoji, groups) => {
  emoji.forEach((data) => {
    const span = Doc.create('span');
    span.setAttribute('class', 'emoji-span');
    span.setAttribute('title', data.name);
    span.textContent = data.char;
    twemoji.parse(span);

    if (data.category === 'people') {
      if (data.name.includes('skin-tone')) {
        const size = localStorage.getItem('emojiSize');
        if (size === 'small') {
          span.setAttribute('style', 'height: 20px; display:none;');
        } else if (size === 'normal') {
          span.setAttribute('style', 'height: 40px; display:none;');
        } else if (size === 'big') {
          span.setAttribute('style', 'height: 80px; display:none;');
        }
      }
      groups[1].appendChild(span);
    } else if (data.category === 'nature') {
      groups[2].appendChild(span);
    } else if (data.category === 'foodAndDrink') {
      groups[3].appendChild(span);
    } else if (data.category === 'activity') {
      groups[4].appendChild(span);
    } else if (data.category === 'places') {
      groups[5].appendChild(span);
    } else if (data.category === 'objects') {
      groups[6].appendChild(span);
    } else if (data.category === 'symbols') {
      groups[7].appendChild(span);
    } else if (data.category === 'flags') {
      groups[8].appendChild(span);
    }
  });
};

getJSON(
  '../emoji.json',
  (data) => {
    const EMOJI = data;
    const groups = Doc.findAll('.emoji-span-container');

    attachEmoji(EMOJI, groups);
    setGrid();

    renderRecent();

    // 각 emoji마다 eventlistener 추가 & copy 버튼, reset 버튼 eventlistener 추가
    copyEvent();

    if (copySetting === 'auto') {
      autocopy();
    } else if (copySetting === 'manual') {
      onecopy();
    }
  },
  (xhr) => {
    console.error(xhr);
  }
);
