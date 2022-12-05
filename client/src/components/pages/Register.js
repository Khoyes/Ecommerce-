import "./style/loginStyle/Register.css";
import "./style/productStyle/RepeatStyles.css";
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <>

            <div className="page">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">

                            <h1 className="text-info">Register Page</h1>
                            <h5 className="text-danger">Create an account here</h5>

                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="row">
                        <div className="col">

                            <form className="form">
                                <h2 className="text-info">Sign Up</h2>

                                <div className="mb-2">
                                    <label>First name</label>
                                    <input
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder="First name" />
                                </div>

                                <div className="mb-2">
                                    <label>Last name</label>
                                    <input type="text" 
                                    required
                                    className="form-control" 
                                    placeholder="Last name" />
                                </div>

                                <div className="mb-2">
                                    <label>Email address</label>
                                    <input
                                    type="email"
                                    required
                                    className="form-control"
                                    placeholder="Enter email" />
                                </div>

                                <div className="mb-2">
                                    <label>Password</label>
                                    <input
                                    type="password"
                                    required
                                    className="form-control"
                                    placeholder="Enter password" />
                                </div>

                                <div className="btn-submit">
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>

                                <p className="forgot-password text-right">
                                    Already registered <Link to="/login">sign in</Link>
                                </p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Register;