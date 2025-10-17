import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDasboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App=()=>{
  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const authdata=useContext(AuthContext)
  // setLocalStorage()
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData= JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  // Automatically update loggedInUserData when Employees change
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && authdata && authdata.Employees) {
      const userData = JSON.parse(loggedInUser);
      if (userData.role === 'Employee') {
        const updatedEmployee = authdata.Employees.find(e => e.id === userData.data.id);
        if (updatedEmployee) {
          setLoggedInUserData(updatedEmployee);
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'Employee', data: updatedEmployee}));
        }
      }
    }
  }, [authdata.Employees]);

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('Admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'Admin'}))
    }
    else if(authdata){
      const employee = authdata.Employees.find((e)=>email == e.email && e.password == password)
      if (employee){
        setUser('Employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'Employee' , data:employee}))
      }
    }
    else{
      alert('Ivalid')
    }
  }

  return(
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user=='Admin'?<AdminDashboard/>:(user=='Employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}
    </>
    
  )
}
export default App