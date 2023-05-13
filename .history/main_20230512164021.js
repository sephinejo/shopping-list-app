const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');

function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
}

addBtn.addEventListener('click', () => {
  onAdd();
});
