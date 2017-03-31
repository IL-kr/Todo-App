import { todoList } from './../selectors';

function displayTask(e) {
  const listItem = `
    <li class="todo__item">
      <input type="text" value="${e}" class="todo__input" readonly>
      <div class="todo__button">
        <button class="todo__start">Start</button>
        <button class="todo__delete">Delete</button>
      </div>
    </li>
  `;
  todoList.innerHTML += listItem;
}

export default displayTask;
