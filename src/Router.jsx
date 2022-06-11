import React from "react"
import { Routes, Route } from "react-router-dom"
import { App } from './App'
import Login from './components/auth/login/Login'
import Profile from './components/profile/Profile'
import Swap from './components/swap/Swap'
import Register from "./components/auth/register/Register"
import Account from "./pages/Account"
import NotFound from "./pages/NotFound"
import Index from "./pages/Index"
import Furniture from "./pages/Furniture"
import Employees from "./pages/Employees"
import Order from "./pages/Order"
import Materials from "./pages/Materials"
import Payroll from "./pages/Payroll"

export default function Router(){
    return (
        <Routes>
            <Route path={'/'} element={<App />}/> 
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/account'} element={<Account />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/swap'} element={<Swap />} />
            <Route path={'/index'} element={<Index />} />
            <Route path={'/furniture'} element={<Furniture />} />
            <Route path={'/employees'} element={<Employees />} />
            <Route path={'/payroll'} element={<Payroll />} />
            <Route path={'/materials'} element={<Materials />} />
            <Route path={'/order'} element={<Order />} />
            <Route path= '*' element={<NotFound />} />
        </Routes>
    )
}