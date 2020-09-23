import Doc from './service/doc.js';

Doc.find('#searchInput').addEventListener('change', () => {
  const input = Doc.find('#searchInput');
  const filter = input.value.toUpperCase();

  const list = Doc.findAll('.emoji-span');

  for (let i = 0; i < list.length; i++) {
    const txtValue = list[i].getAttribute('title');
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
});
