import { useState } from "react";
import axios from "axios";

const BooksList = () => {

    const [books,setBooks] = useState([]);

    const handleGetBooks = () => {
        axios.get("http://localhost:3031/api/books")
        .then(({data}) => {
            console.log(data);
            setBooks(data.books);
        })
        .catch((err) => console.error(err))
    }    

    const handleRemoveBooks = () => {
        setBooks();
        if(!books){
            console.error("Get books data first")
        }
    }

    return(
        <>

        <div className="container text-center">
            <div className="row">
                <div>
                <h1 className="text-primary">Books List</h1>
                <button onClick={handleGetBooks} className="btn btn-primary m-2">Get Books</button>
                <button onClick={handleRemoveBooks} className="btn btn-warning m-2">Remove Books</button>

                </div>

                {books && books.map((book) => {
                    const {id,name,price,details} = book;
                
                    return(

                    <div key={id} className="col text-center">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Name: {name}</h4>

                                <h6 className="card-subtitle">Price: {price}</h6>

                                <p className="card-text">Details: {details}</p>

                                <button className="btn btn-success m-2">Approve</button>
                                <button className="btn btn-danger m-2">Reject</button>
                            </div>
                        </div>
                    </div>
                
                 )})
                }

            </div>
        </div>

        </>
    )

}

export default BooksList;