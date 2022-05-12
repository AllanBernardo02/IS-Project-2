import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchCoePosts = () => API.get('/coeposts')
export const createCoePost = (newPost) => API.post('/coeposts', newPost)
export const countPost = (id) => API.patch(`/coeposts/${id}/countPost`)
export const updateCoePost = (id, updateCoePost) => API.patch(`/coeposts/${id}`, updateCoePost)
export const deleteCoePost = (id) => API.delete(`/coeposts/${id}`)