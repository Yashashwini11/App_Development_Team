import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from './components/mode-toggle'
import Navbar from './components/Navbar'
import Login from './Pages/User/Login'
import Signup from './Pages/User/Signup'
import { Contact } from './Pages/User/Feedback'
import { BrowserRouter } from 'react-router-dom'
import Homelayout from './components/Layouts/Homelayout'
 import { Route,Routes } from 'react-router-dom'
import Home from './Pages/User/Home'
import AdminLayout from './components/Layouts/AdminLayout'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import AdminUsers from './components/Admin/AdminCourses'
import AdminCourses from './components/Admin/AdminCourses'
import AdminAddCourse from './components/Admin/AdminAddCourse'
import AdminManageUser from './components/Admin/AdminManageUser'
import AdminLogin from './components/Admin/AdminLogin'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Homelayout/>}>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      </Route>
      <Route element={<AdminLayout/>}>
        <Route path="/admin/dashboard" element={<AdminCourses/>}></Route>
        <Route path="/admin/users" element={<AdminManageUser/>}></Route>
        
      </Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}