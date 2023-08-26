const markAsComplete = () => {
  const markComplete = document.querySelectorAll('.check-box');
  markComplete.forEach((element, index) => {
    element.addEventListener('input', (event) => {
      const items = JSON.parse(localStorage.getItem('toDoList')) || [];
      items[index].completed = event.target.checked;
      localStorage.setItem('toDoList', JSON.stringify(items));
      // eslint-disable-next-line no-restricted-globals
      location.reload(true);
    });
  });
};

export default markAsComplete;
