import { Link } from "react-router-dom";

const NavBar = () => {

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-danger bg-warning">
          <div className="container-fluid">
            <a className="navbar-brand text-danger" href="#">Ecommerce</a>
            <div className=" navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                </li>
  
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/products">Products</Link>
                </li>

              </ul>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-dark btn-outline-light" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>
      </>
    )
  
  }
  
  export default NavBar