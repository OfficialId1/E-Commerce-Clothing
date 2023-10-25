import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import SingleProduct from "./SingleProduct/SingleProduct";

function App() {
  const [active,setActive]=useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar active={active} />

        <Routes>
          <Route path="/" element={<Home setActive={setActive}/>}></Route>
          <Route path="/registration" element={<Registration setActive={setActive}/>}>
          </Route>
          <Route path="/login" element={<Login setActive={setActive}/>}></Route>
          <Route path="/cart" element={<Cart setActive={setActive}/>}></Route>
          <Route path="/getProduct/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
