import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profileStudent')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profileStudent')).token}`;
  }

  return req;
});
//organization
export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`)
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
//admin authentication
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
//student authentication
export const signInStudent = (formDataStudent) => API.post('/student/signinStudent', formDataStudent);
export const signUpStudent = (formDataStudent) => API.post('/student/signupStudent', formDataStudent);
//COE CRUD
export const fetchCoePosts = () => API.get('/coeposts')
export const fetchCoePostsBySearch = (searchCoeQuery) => API.get(`/coeposts/search?searchCoeQuery=${searchCoeQuery.search || 'none'}`)
export const createCoePost = (newPost) => API.post('/coeposts', newPost)
export const countPost = (id) => API.patch(`/coeposts/${id}/countPost`)
export const updateCoePost = (id, updateCoePost) => API.patch(`/coeposts/${id}`, updateCoePost)
export const deleteCoePost = (id) => API.delete(`/coeposts/${id}`)
//CIT CRUD
export const fetchCitPosts = () => API.get('/citposts')
export const fetchCitPostsBySearch = (searchCitQuery) => API.get(`/citposts/search?searchCitQuery=${searchCitQuery.search || 'none'}`)
export const createCitPost = (newPost) => API.post('/citposts', newPost)
export const countPostCit = (id) => API.patch(`/citposts/${id}/countPost`)
export const updateCitPost = (id, updateCitPost) => API.patch(`/citposts/${id}`, updateCitPost)
export const deleteCitPost = (id) => API.delete(`/citposts/${id}`)
//COORDINATOR CRUD
export const fetchCoorPosts = () => API.get('/coorposts')
export const fetchCoorPostsBySearch = (searchCoorQuery) => API.get(`/coorposts/search?searchCoorQuery=${searchCoorQuery.search || 'none'}`)
export const createCoorPost = (newPost) => API.post('/coorposts', newPost)
export const updateCoorPost = (id, updateCoorPost) => API.patch(`/coorposts/${id}`, updateCoorPost)
export const deleteCoorPost = (id) => API.delete(`/coorposts/${id}`)
//COS CRUD
export const fetchCosPosts = () => API.get('/cosposts') 
export const fetchCosPostsBySearch = (searchCosQuery) => API.get(`/cosposts/search?searchCosQuery=${searchCosQuery.search || 'none'}`)
export const createCosPost = (newPost) => API.post('/cosposts', newPost)
export const countPostCos = (id) => API.patch(`/cosposts/${id}/countPost`)
export const updateCosPost = (id, updateCosPost) => API.patch(`/cosposts/${id}`, updateCosPost)
export const deleteCosPost = (id) => API.delete(`/cosposts/${id}`)
// CIE CRUd
export const fetchCiePosts = () => API.get('/cieposts') 
export const fetchCiePostsBySearch = (searchCieQuery) => API.get(`/cieposts/search?searchCieQuery=${searchCieQuery.search || 'none'}`)
export const createCiePost = (newPost) => API.post('/cieposts', newPost)
export const countPostCie = (id) => API.patch(`/cieposts/${id}/countPost`)
export const updateCiePost = (id, updateCiePost) => API.patch(`/cieposts/${id}`, updateCiePost)
export const deleteCiePost = (id) => API.delete(`/cieposts/${id}`)
// CAFA CRUd
export const fetchCafaPosts = () => API.get('/cafaposts')
export const fetchCafaPostsBySearch = (searchCafaQuery) => API.get(`/cafaposts/search?searchCafaQuery=${searchCafaQuery.search || 'none'}`)
export const createCafaPost = (newPost) => API.post('/cafaposts', newPost)
export const countPostCafa = (id) => API.patch(`/cafaposts/${id}/countPost`)
export const updateCafaPost = (id, updateCafaPost) => API.patch(`/cafaposts/${id}`, updateCafaPost)
export const deleteCafaPost = (id) => API.delete(`/cafaposts/${id}`)
// CLA CRUD
export const fetchClaPosts = () => API.get('/claposts')
export const fetchClaPostsBySearch = (searchClaQuery) => API.get(`/claposts/search?searchClaQuery=${searchClaQuery.search || 'none'}`)
export const createClaPost = (newPost) => API.post('/claposts', newPost)
export const countPostCla = (id) => API.patch(`/claposts/${id}/countPost`)
export const updateClaPost = (id, updateClaPost) => API.patch(`/claposts/${id}`, updateClaPost)
export const deleteClaPost = (id) => API.delete(`/claposts/${id}`)