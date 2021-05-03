export const setStateToPromt = (currentElement, boolean) => {
    return {
      type: "SET_STATE_TO_PROMT",
      payload: {
        currentElement,
        boolean
      },
    };
  };
  
  export const setLanguage = (lang) => {
    return {
      type: "SET_LANGUAGE",
      payload: {
        lang
      },
    };
  };


  export const setMediaQuery = (size) => {
    return {
      type: "SET_MEDIA_QUERY",
      payload: {
        size
      },
    };
  };