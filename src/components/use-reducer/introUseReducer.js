const initialState = [
  {
    id: 0,
    todo: 'Do cardio for one hour',
    done: false,
  },
];

const otherTodo = {
  id: 1,
  todo: 'Eat nachos',
  done: false,
};

const todoReducer = ({ type, payload }, state = initialState) => {
  return [...state, payload ];
};

const action = {
  type: 'CREATE_TODO',
  payload: otherTodo,
};



console.log(todoReducer(action));