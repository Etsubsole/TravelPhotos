import axios from 'axios';

const url1 = "http://localhost:9000/posts";
const url2 = "http://localhost:9000/users";
const url3 = "http://localhost:9000/api/users";
const url4 = "http://localhost:9000/api/users/login";
const url5 = "http://localhost:9000/comments";

export const readComments =() => axios.get(url5);
export const createComment= newComment => axios.post(url5, newComment);
export const updateComment = (id, updateComment) => axios.patch(`${url5}/${id}`, updateComment);
export const deleteComment = (id) => axios.delete(`${url5}/${id}`);
export const readPosts =() => axios.get(url1);
export const createPost = newPost => axios.post(url1, newPost);
export const updatePost = (id, updatePost) => axios.patch(`${url1}/${id}`, updatePost);
export const deletePost = (id) => axios.delete(`${url1}/${id}`);
export const readUsers=() => axios.get(url2);
export const createUser= newUser => axios.post(url2, newUser);
export const updateUser = (id, updateUser) => axios.patch(`${url2}/${id}`, updateUser);
export const deleteUser = (id) => axios.delete(`${url2}/${id}`);
export const registerUser = newUser => axios.post(url3, newUser);
export const readUserss =() => axios.get(url3);
export const authUser=user =>axios.post(url4,user);
export const deleteUserr = (id) => axios.delete(`${url3}/${id}`);