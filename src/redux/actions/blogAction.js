import { blogs } from "../constants/blogConstants";
import axios from "axios";

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get(" http://localhost:5000/api/blog/all");
    dispatch({
      type: blogs.GET_BLOGS,
      payload: res.data.blogs,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBlog = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/blog/${id}`);
    dispatch({
      type: blogs.GET_BLOG,
      payload: res.data.blog,
    });
  } catch (err) {
    console.log(err);
  }
};
