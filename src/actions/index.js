import axios from "axios";
const jsonplaceholder = "https://jsonplaceholder.typicode.com";
export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get(`${jsonplaceholder}/posts`);

  dispatch({ type: "FETCH_POSTS", payload: res.data });
};
export const fetchUser = (id) => async (dispatch) => {
  const res = await axios.get(`${jsonplaceholder}/users/${id} `);

  dispatch({ type: "FETCH_USER", payload: res.data });
};
