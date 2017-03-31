import deleteTodo from './DeleteTodo';
import startTodo from './StartTodo';

function manageTodo(e) {
  const that = this; // used to pass this into deleteTodo
  if (e.target.tagName === 'BUTTON') {
    if (e.target.className === 'todo__delete') {
      deleteTodo(e, that);
    } else if (e.target.className === 'todo__start') {
      startTodo(e, that);
    }
  }
}

export default manageTodo;
