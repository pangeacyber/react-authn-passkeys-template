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
          <a href="https://www.producthunt.com/posts/passkeys-by-pangea?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-passkeys&#0045;by&#0045;pangea" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=447101&theme=light" alt="Passkeys&#0032;by&#0032;Pangea - Authenticate&#0032;Smarter&#0044;&#0032;Not&#0032;Harder&#0032;with&#0032;Passkeys | Product Hunt" style={{width: "250px", height: "54px", width: "250", height: "54"}} /></a>
          <a
            className="App-link"
            href="https://l.pangea.cloud/yTXgwdq"
            target="_blank"
          >
            Try Pangea AuthN for free today!
          </a>
        </header>
      </div>
  );
}

export default App;
