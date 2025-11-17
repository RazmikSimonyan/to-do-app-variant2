export const initialState = {
  text: "",
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeText":
      return {
        ...state,
        text: action.payload,
      };
    case "add":
      if (state.text.trim() === "") {
        return state;
      }

      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: state.text, isDone: false },
        ],
      };
    case "delete":
      return {
        ...state,
        todos: [...state.todos.filter((el) => el.id !== action.id)],
      };
    case "checkChange":
      return {
        ...state,
        todos: [
          ...state.todos.map((el) => {
            if (el.id === action.id) {
              return {
                ...el,
                isDone: !el.isDone,
              };
            } else {
              return el;
            }
          }),
        ],
      };
    default:
      return state;
  }
};
