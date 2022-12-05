import "./style/loginStyle/Login.css"
import { Link } from "react-router-dom";


const Login = () => {


    const submitLogin = (e) => {
        e.preventDefault();
    }

    return (
        <>

            <div className="page">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">

                            <h1 className="text-info">Login Page</h1>
                            <h5 className="text-danger">Login to the site</h5>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="form-container">
                                <form className="form" onSubmit={submitLogin}>
                                    <div className="form-content">

                                        <h3 className="form-title text-info">Sign In</h3>
                                        
                                        <div className="form-group mt-3">
                                            <label>Email address</label>
                                            <input
                                            type="email"
                                            placeholder="Enter email" 
                                            required
                                            className="form-control mt-2" />
                                        </div>

                                        <div className="form-group mt-3">
                                            <label>Password</label>
                                            <input
                                            type="password"
                                            placeholder="Enter password" 
                                            required
                                            className="form-control mt-2" />
                                        </div>

                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>

                                        <div className="login-footer">
                                            <Link to="/register" className="forgot-password mt-2">
                                                <a href="#">Forgot password?</a>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </div>



        </>
    )

}

export default Login;