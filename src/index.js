import './styles/main.css';
import { addNewItem, removeItems, clearAllCompleted } from './modules/genenerate_function.js';
import markAsComplete from './modules/markAsComplete.js';

const createItems = (items) => {
  const container = document.querySelector('.list-container');

  // clearing the container

  container.innerHTML = '';

  items.sort((a, b) => a.index - b.index);
  items.forEach((item) => {
    const list = document.createElement('li');
    list.className = 'list-item';
    list.dataset.index = item.index - 1;
    list.innerHTML = `
    <div class="listboxflex">
      <input class="check-box" type="checkbox" ${item.completed && 'checked'} >
      <input class="description" value="${item.description}">
      <a><i class="fa-solid fa-trash delete-icon"></i></a>
    </div>
    `;
    container.appendChild(list);
  });
};

// Adding elements

const items = JSON.parse(localStorage.getItem('toDoList')) || [];
const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', () => {
  const addList = document.querySelector('.field');
  if (addList.value !== '') {
    const itemDescription = addList.value;
    items.push(addNewItem(itemDescription, items.length));
    createItems(items);
    localStorage.setItem('toDoList', JSON.stringify(items));
    addList.value = '';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  // Removing elements
  const container = document.querySelector('.list-container');
  container.addEventListener('click', (event) => {
    const removeIcons = document.querySelectorAll('.delete-icon');
    removeIcons.forEach((icon, index) => {
      if (event.target === icon) {
        removeItems(items, index);
        // re-order index value in the array
        items.forEach((el, i) => {
          el.index = i + 1;
        });
        createItems(items);
        localStorage.setItem('toDoList', JSON.stringify(items));
      }
    });
    // edit element
    const editElem = document.querySelectorAll('.description');
    editElem.forEach((element, index) => {
      element.addEventListener('input', (event) => {
        const items = JSON.parse(localStorage.getItem('toDoList')) || [];
        items[index].description = event.target.value;
        localStorage.setItem('toDoList', JSON.stringify(items));
      });
    });

    markAsComplete();
  });

  document.getElementById('clear-btn').addEventListener('click', () => {
    clearAllCompleted(items);
  });
});

window.addEventListener('load', () => createItems(items));