'use server';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.GITHUB_ANALYZER_API_URL,
});

export default api;