// import axios from "axios";
//
// const getCsrfToken = () => {
//     const csrfCookie = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
//     return csrfCookie ? csrfCookie.split('=')[1] : null;
// };
//
// // Axios 인스턴스 생성
// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:8080', // 백엔드 서버 주소
//     withCredentials: true, // 쿠키를 포함하여 요청 보냄
// });
//
// // 요청 인터셉터 설정
// axiosInstance.interceptors.request.use(config => {
//     const token = getCsrfToken();
//     if (token) {
//         config.headers['X-XSRF-TOKEN'] = token; // CSRF 토큰을 요청 헤더에 추가
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });
//
// export default axiosInstance;