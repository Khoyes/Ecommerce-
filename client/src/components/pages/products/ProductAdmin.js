import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";
import "../style/productStyle/RepeatStyles.css";
import "../style/productStyle/ProductAdmin.css";

const ProductAdmin = () => {

    let [products,setProducts] = useState([]);
    let [errorMessage,setErrorMessage] = useState("");

    let [del,setDel] = useState("");

    useEffect(() => {
        getAllProducts();
    }, [])


    let getAllProducts = () => {
        let prodUrl = "http://localhost:3031/api/products";
        Axios.get(prodUrl)
        .then((res) => {
            setProducts(res.data);
        })
        .catch((error) => {
            console.error(error);
            setProducts(error);
        })
    }


    const handleDeleteProduct = (productId) => {
        let dataUrl = `http://localhost:3031/api/products/${productId}`;
        Axios.delete(dataUrl)
        .then((res) => {
            getAllProducts();
        })
        .catch((error) => {
            console.error(error);
        })
    }


    const hoverDelete = () => {
        setDel("");
    }

    return(

        <div className="page">
        <div className="container text-center">
            <div className="row">
                <div className="col">
                <h1 className="text-info">Manage Products</h1>

                <div className="text-center m-2 p-2">
                    <h5 className="info text-danger p-2">The admin manages products by creating, updating and <span onMouseOver={hoverDelete} className="del">deleting</span></h5>
                    <Link to="/products/create" className="btn btn-dark btn-outline-info">Add Product</Link>
                </div>

                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <table className="table table-info table-hover table-striped text-center">
                        <thead className="bg-dark text-white">
                            <th className="text-danger">S.No</th>
                            <th className="text-info">Name</th>
                            <th className="text-danger">Image</th>
                            <th className="text-info">Price</th>
                            <th className="text-danger">Qty</th>
                            <th className="text-info">Info</th>
                            <th className="text-danger">Edit</th>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                <>
                                {products.map((product) => {
                                    return(
                                        <tr className="table-info" key={product._id}>
                                            <td className="text-danger">{product._id.substr(product._id.length-4)}</td>
                                            <td className="text-info">{product.name}</td>
                                            <td className="text-danger"><img src={product.image} className="img-fluid img-thumbnail" height="70" width="70"/></td>
                                            <td className="text-info">{product.price}</td>
                                            <td className="text-danger">{product.qty}</td>
                                            <td className="text-info">{product.info}</td>
                                            <td>
                                                <Link to={`/products/${product._id}`} className="btn btn-warning btn-sm m-2">Update</Link>
                                                <button onClick={handleDeleteProduct.bind(this,product._id)} className="btn btn-danger btn-sm m-2">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </>
                            ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>  

    )

}

export default ProductAdmin;