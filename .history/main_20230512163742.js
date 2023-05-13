const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');

function onAdd() {
  // 1. Receive new item
  const text = input.value;
  console.log(text);
}

addBtn.addEventListener('click', () => {
  onAdd();
});
