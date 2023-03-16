import { messages } from "../constants/messageConstants";

export const successMessage = (message) => (dispatch) => {
  dispatch({
    type: messages.SHOW_SUCCESS_MESSAGE,
    payload: message,
  });
};

export const errorMessage = (message) => (dispatch) => {
  dispatch({
    type: messages.SHOW_ERROR_MESSAGE,
    payload: message,
  });
};

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: messages.REMOVE_MESSAGE,
  });
};
