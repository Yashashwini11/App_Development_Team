
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import Teacher from './pages/Admin/Teacher'
import Course from './pages/Admin/Course'
import Student from './pages/Admin/Student'
import { Support } from '@mui/icons-material'
import Setting from './pages/Admin/Setting'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/teacher' element={<Teacher />} />
                        <Route path='/admin/course' element={<Course />} />
                        <Route path='/admin/student' element={<Student />} />
                        <Route path='/admin/support' element={<Support />} />
                        <Route path='/admin/setting' element={<Setting />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App