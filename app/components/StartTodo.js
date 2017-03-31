import { doingList } from './../selectors';
import deleteTodo from './DeleteTodo';

const startTodo = (e, that) => {
  const deletedTodo = deleteTodo(e, that);
  // doingList.innerHTML += deletedTodo.innerHTML;
  doingList.appendChild(deletedTodo);
  // remove innerHTML and observe result
};

export default startTodo;
