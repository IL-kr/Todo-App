import displayTask from './components/DisplayTask';
import manageTodo from './components/ManageTodo';

// get elements
import { addButton, newTaskInput, todoList, warningP } from './selectors';
// helper functions
import hasClass from './helpers';

let newTask = [];

addButton.addEventListener('click', getNewTask, true);
todoList.addEventListener('click', manageTodo);

function returnNewTask() {
  newTask.forEach((e) => {
    displayTask(e);
  });
}

function getNewTask() {
  if (newTaskInput.value === '') {
    warningP.className += ' active';
  } else {
    if (hasClass(warningP, 'active')) {
      warningP.classList.remove('active');
    }
    newTask.push(newTaskInput.value);
    returnNewTask();
    newTask = []; // hack!! remove and see the effect
    newTaskInput.value = '';
  }
}
