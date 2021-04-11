
const todoReducer = (state = [], { type, payload }) => {
  switch(type) {
    case 'CREATE_TODO': return [...state, payload];
    case 'DELETE_TODO': return state.filter(todo => (todo.id !== payload));
    case 'TOGGLE_TODO': return state.map(todo => ( todo.id === payload ? { ...todo, done: !todo.done} : todo ))
    default: return state;
  }
};

export default todoReducer;
