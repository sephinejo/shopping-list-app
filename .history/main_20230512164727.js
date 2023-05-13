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
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'item__checkbox');
  checkbox.setAttribute('name', 'item__checkbox');
  checkbox.setAttribute('type', 'checkbox');

  const label = document.createElement('label');
  label.setAttribute('for', 'item__checkbox');
  label.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = <i class='fa-regular fa-trash-can'></i>;

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');
}

addBtn.addEventListener('click', () => {
  onAdd();
});
