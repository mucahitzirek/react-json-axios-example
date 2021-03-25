import axios from "axios";

const userGetPath = "https://jsonplaceholder.typicode.com/users";

const postsIdPath = (id) => {
  return `https://jsonplaceholder.typicode.com/posts/${id}`;
};

const postsId = (id) => {
  return axios.get(postsIdPath(id));
};
const userGet = () => {
  axios.get(userGetPath);
};

export { userGet, postsId };
