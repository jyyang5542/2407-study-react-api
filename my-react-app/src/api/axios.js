// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001', // 로컬 서버의 기본 URL
});

export default instance;
