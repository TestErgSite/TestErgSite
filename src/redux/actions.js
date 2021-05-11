export const setStateToPromt = (currentElement, boolean) => {
    return {
      type: "SET_STATE_TO_PROMT",
      payload: {
        currentElement,
        boolean
      },
    };
  };
  
  export const handlePopup = (isActive) => {
    return {
      type: "HANDLE_POPUP",
      payload: {
        isActive
      },
    };
  }

  export const showPopupAsync = () => {
    return (dispatch) => {
        dispatch(handlePopup('visible'))
        setTimeout(() => {
          dispatch(handlePopup('animate'))
        }, 300)
    };
  };

  export const hidePopupAsync = () => {
    return (dispatch) => {
        dispatch(handlePopup('visible'))
        setTimeout(() => {
          dispatch(handlePopup('none'))
        }, 300);
    };
  };