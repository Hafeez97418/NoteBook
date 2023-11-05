import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Notes from "./components/Notes";
import "./styles/output.css";
import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import AppState from "./context/AppState";
import Alert from "./components/Alert";
function App(props) {
  const { Auth } = props;
  return (
    <BrowserRouter>
      <AppState
        toggleAlert
        children={
          <div className="h-screen overflow-y-scroll text-white">
            <Navbar Auth={Auth} />
            <Alert />
            <Routes>
              <Route path="/" element={<Home Auth={Auth} />} />
              <Route path="/Notes" element={<Notes style="mt-12"/>} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        }
      />
    </BrowserRouter>
  );
}

export default App;
