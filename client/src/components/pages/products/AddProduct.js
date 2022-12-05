import { useState } from "react";
import { useNavigate } from "react-router-dom"; //When you want to do POST req and submit form, use this
import Axios from "axios";
import "../style/productStyle/RepeatStyles.css";

const AddProduct = () => {

    let navigate = useNavigate();
    let [product, setProduct] = useState({
        name: "", //Need onChange event to store input
        image: "",
        price: "",
        qty: "",
        info: ""
    });

    let [submit, setSubmit] = useState(false);

    let submitProduct = (event) => {
        event.preventDefault();
        let dataUrl = "http://localhost:3031/api/products";
        Axios.post(dataUrl,product) //Pass URL and data
        .then((res) => {
            setSubmit(true);
        })
        .catch((error) => {
            console.error(error);
        })
    };

    let updateInput = (event) => {
        setProduct({
            ...product, //Preserve existing state
            [event.target.name] : event.target.value //Binding values
        })
    }; //Initially empty array -> Changed with setProduct -> Data binding with form -> Individually. now all combined into a form


    return(        
        <>
        {
            submit ? (navigate("/products/admin")) : (
                <>
                    <div className="page">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-center text-info">Add Product</h1>
                                <div className="form-group justify-content-center">
                                    <form onSubmit={submitProduct} className="border border-dark m-2 bg-light">

                                    <div className="form-group m-3">
                                      <input 
                                      name="name"
                                      value={product.name}
                                      onChange={updateInput}
                                      required
                                      type="text"
                                      className="form-control"
                                      placeholder="Product Name" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="image"
                                      value={product.image}
                                      onChange={updateInput}
                                      required
                                      type="text"
                                      className="form-control"
                                      placeholder="Image URL" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="price"
                                      value={product.price}
                                      onChange={updateInput}
                                      required
                                      type="number"
                                      className="form-control"
                                      placeholder="Price" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="qty"
                                      value={product.qty}
                                      onChange={updateInput}
                                      required
                                      type="number"
                                      className="form-control"
                                      placeholder="Quantity" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="info"
                                      value={product.info}
                                      onChange={updateInput}
                                      required
                                      type="text"
                                      className="form-control"
                                      placeholder="Info" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="name"
                                      required
                                      type="submit"
                                      className="btn btn-dark btn-outline-info"
                                      value="Add Product" />
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
        </>
    );
};

export default AddProduct;