import { newTaskInput, warningP } from './../selectors';
import returnNewTask from './ReturnNewTask';

// helper function
import hasClass from './../helpers';

let newTask = [];

const getNewTask = () => {
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
};

export { getNewTask, newTask };
