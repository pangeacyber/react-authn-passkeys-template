import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Pangea AuthProvider component
import {AuthProvider} from '@pangeacyber/react-auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* We wrap the App component with our AuthProvider */}
    <AuthProvider
      config={{
        domain: process.env.REACT_APP_PANGEA_DOMAIN,
        clientToken: process.env.REACT_APP_CLIENT_TOKEN,
        useJwt: false
      }}
      cookieOptions={{
        useCookie: true,
        cookieName: "pangea-authn"
      }}
      loginUrl={process.env.REACT_APP_LOGIN_URL}
      useStrictStateCheck={false}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
