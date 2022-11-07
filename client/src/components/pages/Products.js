import { useState } from "react";
import axios from "axios"


const BooksList = () => {

    const[books,setBooks] = useState([]);

    const handleGetBooks = () => {
        axios.get("http://localhost:3031/api/books")
        .then(({data}) => {
            console.log(data)
            setBooks(data.books)
        })
        .catch((err) => console.err(err));
    }

    const handleRemoveBooks = () => {
        setBooks();
        if(books){
            console.log(books)
        }

        else{
            console.error("Click Get books first")
        }
    }

    return(
        <>
        
        <div className="container">
            <div className="row text-center">
                <div>
                    <h1>Books</h1>
                    <button onClick={handleGetBooks} className="btn btn-success m-2">Get books</button>
                    <button onClick={handleRemoveBooks} className="btn btn-danger m-2">Remove Books</button>
                </div>

                {books && books.map((book) => {
                    const {id,name,details,price} = book;

                    return(

                        <div key={id} className="col">
                            <div className="card">
                                <div className="card-body">

                                <h4 className="card-title">Title: {name}</h4>

                                <h5 className="card-subtitle">Details: {details}</h5>

                                <h6 className="card-text">Price: {price}</h6>

                                </div>
                            </div>
                        </div>
                    )

                })

                }
                
            </div>
        </div>
        
        </>
    )

}

export default BooksList;