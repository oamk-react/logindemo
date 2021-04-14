import React,{useState} from 'react';
import { useHistory } from 'react-router';

export default function Login({setUser}) {
  const [username, setUsername] = useState('jjuntune');
  const [password,setPassword] = useState('testi123');

  let history = useHistory();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('username',username);
    formData.append('password',password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept' : 'application/json',
      },
      body: formData
    }

    const response = await fetch('http://localhost:8888/logindemo/login.php',config);
    const json = await response.json();

    if (response.ok) {
      setUser(json);
      history.push('/');
    } else {
      alert("Error logging in.");
    }

  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={login}>
      <h3>My login form</h3>
      <div>
        <label>Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
    </div>
  )
}
