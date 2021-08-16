/* eslint-disable no-undef */
import Doc from '../../../utils/doc.js';
import renderRecent from '../../../components/recent/renderRecent.js';
import emojis from '../../../../assets/emojis/index.js';

const attachEmoji = () => {
  const containers = Doc.findAll('.emoji-span-container');
  const size = localStorage.getItem('emojiSize');
  emojis.forEach((emoji) => {
    if (window.Worker) {
      const worker = new Worker(new URL('../../../../worker.js', import.meta.url));
      
      worker.postMessage(emoji);

      worker.onmessage = (e) => {
        
        let category = 0;
        switch (e.data[0].category){
          case 'skin-tone' :
            category = 0; break;
          case 'people':
            category = 1; break;
          case 'nature' :
            category = 2; break;
          case 'activity' :
            category = 3;  break;
          case 'foodAndDrink' :
            category = 4; break;
          case 'places' :
            category = 5; break;
          case 'objects' :
            category = 6; break;
          case 'symbols' :
            category = 7; break;
          case 'flags' :
            category = 8; break;
        }

        e.data.forEach((data) => {
          const span = Doc.create('span');
          span.setAttribute('class', `emoji-span ${size}`);
          span.setAttribute('title', data.name);
          span.innerHTML = data.char;
          
          if (category === 0){
            span.setAttribute('style', 'display:none;');
          }

          if (category === 1 && data.name.includes('skin-tone')){
            span.setAttribute('style', 'display:none;');
          }
          containers[category].appendChild(span);
        });
      };
    } else {
      // console.log('Your browser doesn\'t support web workers.');
    }   
  });
};

export default function getEmoji() {
  return new Promise((resolve) => {
    

    attachEmoji();
    renderRecent();

    resolve();
  });
}
