import { blogs } from "../constants/blogConstants";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case blogs.GET_BLOGS:
      return {
        blogs: [...action.payload],
      };

    case blogs.GET_BLOG:
      return {
        blog: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
