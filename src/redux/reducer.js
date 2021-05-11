const initialState = {
  promts: {
    tree: false,
    barometer: false,
    mbti: false,
    enn: false,
    side: true,
  },
  isActive: 'none',
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_STATE_TO_PROMT":
      return {
        ...state,
        promts: {
          [action.payload.currentElement]: action.payload.boolean,
        },
      };
   
        case "HANDLE_POPUP":
          console.log(action.payload.isActive)
          return {
            ...state,
            isActive: action.payload.isActive
          };

    default:
      return state;
  }
};
export default reducer;
