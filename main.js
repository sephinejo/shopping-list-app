const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <div class="item__name">
        <input
          class="item__checkbox"
          type="checkbox"
        />
        <label>${text}</label>
      </div>
      <button class="item__delete">
        <i class="fa-regular fa-trash-can" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  id++;
  return itemRow;
}

input.addEventListener('keydown', (e) => {
  if (e.isComposing) {
    return;
  }
  if (e.key === 'Enter') {
    onAdd();
  }
});

addBtn.addEventListener('click', () => {
  onAdd();
});

items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id && e.target.tagName === 'I') {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
