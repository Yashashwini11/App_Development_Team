import axios from 'axios';

const baseURL = 'http://localhost:8080';  
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const SignUp = (name, email, password, role) => 
    axiosInstance.post('/api/v1/auth/register', { name, email, password, role });

const getUsers = () => axiosInstance.get('/instructor/getallusers'); 
const getCourses = () => axiosInstance.get('/instructor/getallcourses'); 
const handleEnrollment = (userId, courseId) => axiosInstance.post('/instructor/viewenrollment', { userId, courseId });
const getusercourse = () => axiosInstance.get('/instructor/getenrollment');
const deleteCourse = (courseId) => axiosInstance.delete(`/instructor/deletecourse/${courseId}`)

const login = (email, password, role) => 
    axiosInstance.post('/api/v1/auth/authenticate', { email, password, role });
const addcourse = (title, category, difficultyLevel, syllabus, schedule, prerequisites) => {
    axiosInstance.post('instructor/addcourse', {
        title,
        category,  // Ensure this is being sent
        difficultyLevel,
        syllabus,
        schedule,
        prerequisites  // Ensure this is being sent
    });
};
const getUserCourses = (userId) => axiosInstance.get(`/user/courses/${userId}`);
const logout=()=>axiosInstance.delete('/api/v1/auth/logout');

export { axiosInstance, getUsers, SignUp, login,getusercourse ,addcourse,getCourses,deleteCourse,handleEnrollment,getUserCourses,logout };
