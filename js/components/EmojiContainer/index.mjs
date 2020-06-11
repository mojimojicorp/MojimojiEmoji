/* eslint-disable import/extensions */
import Doc from '../../service/doc.mjs';
import makeEmojiNav from './emojiNav.mjs';
import makeEmojiList from './emojiList.mjs';

function makeEmojiContainer() {
  const container = Doc.find('.container');

  const emojiContainer = Doc.create('div');
  emojiContainer.className = 'emoji-container';

  // emoji-nav
  const nav = Doc.create('div');
  nav.className = 'emoji-nav';

  // emoji-search
  const search = Doc.create('div');
  search.className = 'emoji-search';

  const searchContainer = Doc.create('div');
  searchContainer.className = 'search-container';
  const iconSpan = Doc.create('span');
  iconSpan.className = 'icon';
  const searchIcon = Doc.create('i');
  searchIcon.className = 'fa fa-search';
  iconSpan.appendChild(searchIcon);
  searchContainer.appendChild(iconSpan);

  const searchInput = Doc.create('input');
  searchInput.id = 'searchInput';
  searchInput.type = 'search';
  searchInput.placeholder = 'search';
  searchInput.autofocus = true;

  const color = Doc.create('div');
  color.className = 'color-container';

  search.appendChild(searchContainer);
  search.appendChild(searchInput);
  search.appendChild(color);

  // emoji-list
  const list = Doc.create('div');
  list.className = 'emoji-list';
  const groups = Doc.create('div');
  groups.className = 'groups';
  list.appendChild(groups);

  emojiContainer.appendChild(nav);
  emojiContainer.appendChild(search);
  emojiContainer.appendChild(list);

  container.appendChild(emojiContainer);

  makeEmojiNav();
  makeEmojiList();
}

export default makeEmojiContainer;
