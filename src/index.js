import './styles/main.css';

const tasks = [
  {
    description: 'learn javascript',
    completed: false,
    index: 1,
  },
  {
    description: 'learn OOP',
    completed: false,
    index: 0,
  },
];

const showTasks = () => {
  const container = document.querySelector('.list-container');

  // Sorting components array based on index property

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const items = document.createElement('li');
    items.className = 'list-item';
    items.innerHTML = `<input class="check-box" type="checkbox">${task.description}`;
    container.appendChild(items);
  });
};

window.addEventListener('load', showTasks);