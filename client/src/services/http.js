import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_HOST || '',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhMGFkMTlhLTZlOTUtNDk2OC04Yzc5LWYyMTE0YWQ2M2U5NCIsImVtYWlsIjoiYXBwbGljYXRpb24tdGVzdEBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTYzODU4NDk3MywiZXhwIjoxNjM5MTg5NzczfQ.2LkPlHHzZH7A9G1pX-rWSS_dn0qpVigT0E1irKi8Ttk',
    },
});

export default axiosInstance;
