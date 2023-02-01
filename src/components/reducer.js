export default function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter((elem) => elem.id !== action.payload);

    case "toggle":
      return state.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, isCompleted: !elem.isCompleted };
        }
        return elem;
      });

    case "adit":
      return { ...state, title: action.payload };

    default:
      return state;
  }
}
