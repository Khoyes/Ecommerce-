import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom"; //When you want to do POST req and submit form, use this
import Axios from "axios";
import "../style/productStyle/RepeatStyles.css";

const UpdateProduct = () => {

    let productId = useParams().id;
    let navigate = useNavigate();    
    let [submitted, setSubmitted] = useState(false);


    let [selectedProduct, setSelectedProduct] = useState({
        name: "", 
        image: "",
        price: "",
        qty: "",
        info: ""
    });


    useEffect(() => {
        let dataUrl = `http://localhost:3031/api/products/${productId}`;
        Axios.get(dataUrl)
        .then((res) => {
            setSelectedProduct(res.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [productId])


    let updateInput = (event) => {
        setSelectedProduct({
            ...selectedProduct, //Preserve existing state
            [event.target.name] : event.target.value //Binding values
        })
    }; 

    let submitProduct = (event) => {
        event.preventDefault();
        let dataUrl = `http://localhost:3031/api/products/${productId}`;
        Axios.put(dataUrl,selectedProduct)
        .then((res) => {
            setSubmitted(true);
        })
        .catch((error) => {
            console.error(error);
        })
    }


    return(        
        <>
        {
            submitted ? (navigate("/products/admin")) : (
                <>
                    <div className="page">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-center text-info">Update Product</h1>
                                <div className="form-group justify-content-center m-3">
                                    <form onSubmit={submitProduct} 
                                     className="border border-dark m-2 bg-light">

                                    <div className="form-group m-3">
                                      <input 
                                      name="name"
                                      value={selectedProduct.name}
                                      onChange={updateInput}
                                      required
                                      type="text"
                                      className="form-control"
                                      placeholder="Product Name" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="image"
                                      value={selectedProduct.image}
                                      onChange={updateInput}
                                      required
                                      type="text"
                                      className="form-control"
                                      placeholder="Image URL" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="price"
                                      value={selectedProduct.price}
                                      onChange={updateInput}
                                      required
                                      type="number"
                                      className="form-control"
                                      placeholder="Price" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="qty"
                                      value={selectedProduct.qty}
                                      onChange={updateInput}
                                      required
                                      type="number"
                                      className="form-control"
                                      placeholder="Quantity" />
                                    </div>

                                    <div className="form-group m-3">
                                      <input 
                                      name="info"
                                      value={selectedProduct.info}
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
                                      value="Update" />
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

export default UpdateProduct;