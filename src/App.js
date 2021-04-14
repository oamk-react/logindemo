import './App.css';
import {useState} from 'react';
import Login from './Login';
import Home from './Home';
import About from './About';
import {Switch, Route} from 'react-router-dom';
import Logout from './Logout';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Switch>
      <Route path="/" exact render={() =>
        <Home user={user} />
      } 
      />
      <Route path="/about" component={About} />
      <Route path="/login" render={() => 
        <Login 
          setUser={setUser}
        />
        }
      />
      <Route path="/logout" render={() => 
        <Logout setUser={setUser} />
      }
      />
    </Switch>
  );
}

export default App;
