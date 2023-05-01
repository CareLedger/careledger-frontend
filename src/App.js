import Home from "./pages/Home/home";
import "./styles/App.css"
import "./styles/variables.css"
import Signup from "./pages/Auth/SignUp/signup";

function App() {
  return (
    <div className="bg">
      {/* <Home /> */}
      <Signup />
    </div>
  );
}

export default App;
