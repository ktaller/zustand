import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Routes from "./routes/Routes";
// import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return <Routes />;
}

export default App;
