import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from "react";
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const[user, setUser] = useState(null);
  
  const handleLogin = (email, password) =>{
    if(email ==="admin@mail.com" && password === "123"){
      setUser("admin")
    }
    else if(email ==="user@mail.com" && password === "123"){
      setUser("employee");
    }
    else{
      alert("Invalid credentials");
    }
  }

const data = useContext(AuthContext)
console.log(data)
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:''}
      {user ==="admin"? <AdminDashboard />: <EmployeeDashboard/>}
    </>
  )
}

export default App