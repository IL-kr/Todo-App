import displayTask from './DisplayTask';
import { newTask } from './GetNewTask';

function returnNewTask() {
  newTask.forEach((e) => {
    displayTask(e);
  });
}

export default returnNewTask;
