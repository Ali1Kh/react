import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Start from "./components/start/Start";
const router = createHashRouter([
  {path:"start",element: <Start/> ,children:[
  { path: "", element: <Home /> },
  { path: "home", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "portfolio", element: <Portfolio /> },
  { path: "contact", element: <Contact /> }
  ]},
  { path: "*", element: <><h1>Page Not Found...</h1></> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
