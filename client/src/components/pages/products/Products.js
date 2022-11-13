import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";
import "../style/RepeatStyles.css"

const Products = () => {

    let [products,setProducts] = useState([]);
    let [errorMessage,setErrorMessage] = useState("");

    useEffect(() => {
        let prodUrl = "http://localhost:3031/api/products";
        Axios.get(prodUrl)
        .then((res) => {
            setProducts(res.data);
        })
        .catch((error) => {
            console.error(error);
            setProducts(error);
        })
    }, [])

    return(
        <>

        <div className="page">
        <div className="container text-center">
            <div className="row">
                <div className="col">
                <h1 className="text-info">Manage Products</h1>

                <div className="m-3 p-3 text-center">
                    <p className="lead text-danger">A list of all the products available</p>
                </div>

                </div>
            </div>
        </div>

        <div className="container text-center">
            <div className="row mt-3">
                {products.length > 0 ? (
                    <>
                    {products.map((product) => {
                        return(
                            <div className="col-md-3" key={product._id}>
                                <div className="card bg-dark p-1">
                                    <div className="card-header text-center">
                                        <img src={product.image} 
                                        className="img-fluid img-thumbnail"
                                        width="300" alt="Image"/>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item text-danger">
                                                Name: <span className="text-primary">{product.name}</span>
                                            </li>
                                            <li className="list-group-item text-danger">
                                                Price: <span className="text-primary">{product.price}</span>
                                            </li>
                                            <li className="list-group-item text-danger">
                                                Qty: <span className="text-primary">{product.qty}</span>
                                            </li>
                                            <li className="list-group-item text-danger">
                                                Info: <span className="text-primary">{product.info}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </>
                ) : null}
            </div>
        </div>
        </div>

        </>
    )

}

export default Products;