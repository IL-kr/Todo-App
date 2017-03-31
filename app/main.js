import manageTodo from './components/ManageTodo';
import { getNewTask } from './components/GetNewTask';

import { addButton, todoList, doingList, completedList } from './selectors';

addButton.addEventListener('click', getNewTask, true);
todoList.addEventListener('click', manageTodo);
doingList.addEventListener('click', manageTodo);
completedList.addEventListener('click', manageTodo);

