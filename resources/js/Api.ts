import axios from "axios";

export function register(name: string, email: string, password: string, password_confirmation: string) {
  return axios.post('/api/register', { name, email, password, password_confirmation });
}
export function login(email: string, password: string) {
  return axios.post('/api/login', { email, password });
}