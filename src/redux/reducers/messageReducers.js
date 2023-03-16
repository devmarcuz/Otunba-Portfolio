import { messages } from "../constants/messageConstants";

const initialState = {
  message: {
    error: "",
    success: "",
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case messages.SHOW_SUCCESS_MESSAGE:
      return {
        ...state.message,
        success: action.payload,
      };

    case messages.SHOW_ERROR_MESSAGE:
      return {
        ...state.message,
        error: action.payload,
      };

    case messages.REMOVE_MESSAGE:
      return {
        ...state.message,
        error: "",
        success: "",
      };

    default:
      return state;
  }
};

export default messageReducer;
