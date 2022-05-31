import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
//organization
export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
//admin authentication
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
//COE CRUD
export const fetchCoePosts = () => API.get('/coeposts')
export const createCoePost = (newPost) => API.post('/coeposts', newPost)
export const countPost = (id) => API.patch(`/coeposts/${id}/countPost`)
export const updateCoePost = (id, updateCoePost) => API.patch(`/coeposts/${id}`, updateCoePost)
export const deleteCoePost = (id) => API.delete(`/coeposts/${id}`)
//CIT CRUD
export const fetchCitPosts = () => API.get('/citposts')
export const createCitPost = (newPost) => API.post('/citposts', newPost)
export const countPostCit = (id) => API.patch(`/citposts/${id}/countPost`)
export const updateCitPost = (id, updateCitPost) => API.patch(`/citposts/${id}`, updateCitPost)
export const deleteCitPost = (id) => API.delete(`/citposts/${id}`)