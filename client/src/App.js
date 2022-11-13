import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProductAdmin from "./components/pages/products/ProductAdmin";
import Products from "./components/pages/products/Products";
import AddProduct from "./components/pages/products/AddProduct";
import UpdateProduct from "./components/pages/products/UpdateProduct";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="products" element={<Products />} />        
      <Route exact path="products/admin" element={<ProductAdmin />} />     
      <Route exact path="products/create" element={<AddProduct />} />        
      <Route exact path="products/:id" element={<UpdateProduct />} />        

      </Routes>
    </Router>
  );
}

export default App;
