import './App.css';
import { Route, Routes } from "react-router-dom";

import Add from "./components/Add/add";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Navi from "./components/Navi/navi";
import Register from "./components/Register/register";

function App() {
  return (
    <>
    <Navi />
    <Routes>
      <Route path='/addpost' element={<Add />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
