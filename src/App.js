import "./App.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Newproduct from "./Components/Newproduct";
import Update from "./Components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Components/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} /> {/* Default */}
          <Route path={"/Product"} element={<Product />} />
          <Route path={"/Admin"} element={<Admin />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Registration"} element={<Registration />} />
          <Route path={"/Newproduct"} element={<Newproduct />} />
          <Route path={"/Update/:id"} element={<Update />} />
          <Route path={"/Detail"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
