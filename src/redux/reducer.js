const initialState = {
  promts: {
    tree: false,
    barometer: false,
    mbti: false,
    enn: false,
    side: true,
  },
  lang: null,
  size: null
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
  
      case "SET_LANGUAGE":
          return {
            ...state,
           lang: action.payload.lang
          }
     
          case "SET_MEDIA_QUERY":
            return {
              ...state,
             size: action.payload.size
            }
    

    default:
      return state;
  }
};
export default reducer;
