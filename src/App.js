import './App.css';

// Pangea AuthN imports
import { useAuth } from "@pangeacyber/react-auth";

function App() {
  const { authenticated, user, login, logout } = useAuth();

  return (
      <div className="App">
        <header className="App-header">
          <h1>Login with Passkeys 🔑</h1>
          <p>
            {/* Check if user is authenticated */}
            { authenticated ?
              <p>
                Welcome, {user.email}!
                <br />
                <button style={{ 
                  background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
                  border: 'none',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                }} 
                onClick={logout}>Logout</button>
              </p>
              :
            <button style={{ 
              background: 'linear-gradient(to right, #416cff, #4b2bff)',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            }}
            onClick={login}>Login</button>
          }
          </p>
          <a
            className="App-link"
            href="https://l.pangea.cloud/yTXgwdq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Pangea AuthN for free today!
          </a>
        </header>
      </div>
  );
}

export default App;
