import './App.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from './components/Navbar';



function App() {
// Routes for all the pages
const router =  createBrowserRouter([
    {path: "/",
      element: <Navbar />, children:[
    {index: true,
      element: <Home />},    
    {path: "/home",
      element: <Home />},
    {path: "/about",
      element: <About />},
    {path: "/items",
      element: <Items />}
      ]},
  ])

// Another way to create routes
// const routes = createRoutesFromElements(
//   <>
//     <Route path="/" element={<Home />} />,
//   <Route path="/home" element={<Home />} />,
//   <Route path="/about" element={<About />} />,
//   <Route path="/items" element={<Items />} />,
//   </>
// )
// const router =  createBrowserRouter(routes)

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
