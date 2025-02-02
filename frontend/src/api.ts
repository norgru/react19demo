import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getUsers = () => axios.get(API_URL);
export const addUser = (user: { name: string; email: string }) =>
  axios.post(API_URL, user);
export const updateUser = (id: number, user: { name: string; email: string }) =>
  axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
