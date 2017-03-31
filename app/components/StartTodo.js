import { doingList } from './../selectors';
import deleteTodo from './DeleteTodo';

const startTodo = (e, that) => {
  const deletedTodo = deleteTodo(e, that);
  // doingList.innerHTML += deletedTodo.innerHTML;
  deletedTodo.querySelector('.todo__start').textContent = 'Done';
  deletedTodo.querySelector('.todo__start').className = 'todo__done';
  doingList.appendChild(deletedTodo);
  // remove innerHTML and observe result
};

export default startTodo;
