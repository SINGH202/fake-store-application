import "./styles.css";
import { Example } from "./components/Example";
import { Login } from "./components/LoginCompoent";
import { ThemeButton } from "./components/ThemeButton";
import Navbar from "./components/Navbar";
import RouteComponent from "./Routes/Routes";

export default function App() {
  return (
    <div className="App">
      {/* <Example /> */}
      <Navbar/>
      <RouteComponent />
      {/* <Login />
      <ThemeButton /> */}
    </div>
  );
}

// props drilling
// REact.createContext
// Link
// Navlink
// route
// 3 methods
// rendre
// child
// component
// dynamicRouting
// useParams
// history
// location
// match
// match.params
// exact
// switch
// cases
// routes
// /
// /product/:id/:productId
// /product/:id
// /product
// switch
// Redirect
// history
// location
