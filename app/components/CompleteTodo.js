import { completedList } from './../selectors';
import deleteTodo from './DeleteTodo';

const completeTodo = (e, that) => {
  const deletedTodo = deleteTodo(e, that);
  const doneButton = deletedTodo.querySelector('.todo__done');
  doneButton.parentNode.removeChild(doneButton);
  // doingList.innerHTML += deletedTodo.innerHTML;
  completedList.appendChild(deletedTodo);
  // remove innerHTML and observe result when used intstead of appendchild
};

export default completeTodo;
