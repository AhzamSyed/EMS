import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const data = useContext(AuthContext);

  useEffect(() => {
      if(data){
        const loggedInUser = localStorage.getItem("loggedInUser")
      }

  }, [data])
  
  if (!data) {
    return <div>Loading...</div>;
  }

  const { employees, admin } = data;

  const handleLogin = (email, password) => {
    const foundAdmin = admin.find(a => a.email === email && a.password === password);
    const foundEmployee = employees.find(e => e.email === email && e.password === password);

    if (foundAdmin) {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (foundEmployee) {
      setUser("employee");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))

    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
