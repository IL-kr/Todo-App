const deleteTodo = (e, that) => {
  const deletedTodo = that.removeChild(e.target.parentNode.parentNode);
  return deletedTodo;
};

export default deleteTodo;
