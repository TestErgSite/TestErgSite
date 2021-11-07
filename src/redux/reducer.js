const initialState = {
  promts: {
    tree: false,
    barometer: false,
    mbti: false,
    enn: false,
    side: true,
  },
  isActive: 'none',
  demo: 'none',
  url: "http://www.beta.ergonza.org/",
  urlMobile: "https://spotted-pin-1440.glideapp.io/"
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
          return {
            ...state,
            isActive: action.payload.isActive,
          };

        case "HANDLE_POPUP_DEMO":
          return {
            ...state,
            demo: action.payload.demo,
          };

    default:
      return state;
  }
};
export default reducer;
