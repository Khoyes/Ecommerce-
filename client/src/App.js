import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BooksList from "./components/pages/BooksList";
import Home from "./components/home/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NavBar from "./components/nav/NavBar";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="products" element={<BooksList />} />
      <Route exact path="register" element={<Register />} />        
      </Routes>
    </Router>
  );
}

export default App;
