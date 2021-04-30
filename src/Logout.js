import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setUser}) {
  useEffect(() => {
    async function logout() {
      const config = {
        method: 'GET',
        credentials: 'include'
      }
  
      const url = 'http://localhost:8888/logindemo/logout.php';
      try {
        await fetch(url,config);
        setUser(null);
        sessionStorage.clear();
      } catch (error) {
        alert(error);
      }
    }
    logout();
  }, [])


  return (
    <div>
      <p>You have logged out!</p>
      <Link to="/login">Sign in</Link>
    </div>
  )
}
