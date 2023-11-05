import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css";

let AuthFirst = async  () => {
  const Auth = await localStorage.getItem("authToken");
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App Auth={Auth} />
    </React.StrictMode>
  );

}
AuthFirst()