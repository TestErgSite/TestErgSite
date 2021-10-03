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
        isActive,
      },
    };
  }

  export const showPopupAsync = () => {
    return (dispatch) => {
        dispatch(handlePopupDemo('none'));
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

  export const handlePopupDemo = (demo) => {
    return {
      type: "HANDLE_POPUP_DEMO",
      payload: {
        demo,
      },
    };
  }

  export const showPopupDemoAsync = () => {
    return (dispatch) => {
        dispatch(handlePopup('none'))
        dispatch(handlePopupDemo('visible'))
        setTimeout(() => {
          dispatch(handlePopupDemo('animate'))
        }, 300)
    };
  };

  export const hidePopupDemoAsync = () => {
    return (dispatch) => {
        dispatch(handlePopupDemo('visible'))
        setTimeout(() => {
          dispatch(handlePopupDemo('none'))
        }, 300);
    };
  };