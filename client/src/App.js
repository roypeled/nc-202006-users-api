import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {users.map(user => (
          <div key={user.username}>
            {user.name}
          </div>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Class
        </a>
      </header>
    </div>
  );
}

export default App;
