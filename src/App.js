import Home from "./pages/Home/home";
import "./styles/App.css"
import "./styles/variables.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Auth/SignUp/signup";
import Login from "./pages/Auth/Login/login";

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
