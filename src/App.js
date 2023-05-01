import Home from "./pages/Home/home";
import "./styles/App.css"
import "./styles/variables.css"
import Signup from "./pages/Auth/SignUp/signup";
import Login from "./pages/Auth/Login/login";

function App() {
  return (
    <div className="bg">
      {/* <Home /> */}
      <Signup />
      {/* <Login /> */}
    </div>
  );
}

export default App;
