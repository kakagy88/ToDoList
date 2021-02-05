const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_ALL":
      const numUnCompletedTodo = action.todos.filter(
        todo => todo.completed === false
      ).length;
      const ids = action.todos.map(todo => todo.id);
      return state.map(todo =>
        ids.includes(todo.id)
          ? numUnCompletedTodo === 0
            ? { ...todo, completed: false }
            : { ...todo, completed: true }
          : { ...todo, completed: todo.completed }
      );

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "DELETE_COMPLETED":
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
};

export default todos;
