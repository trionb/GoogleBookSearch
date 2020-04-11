import React, { useState, useEffect } from "react";
import API from "../utils/API"
import "../Results/Results.css"

function Results () {
    const [books ,setBooks] = useState([]);
     
    const loadBooks =() => {
     API.getBooks()
       .then(res => {
           console.log(res.data)
           setBooks(res.data)
       })
    }

    useEffect(()=>{
        loadBooks();
    }, []);

    const HandleFormSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="shadow-lg p-3 mb-5 rounded">
                <div className="jumbotron3">
                    <div className="container">
                        <h3 className="display-4">Results</h3>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                    <button 
                                        className="searchbtn" 
                                        type="submit" 
                                        onClick={HandleFormSubmit}>
                                         View
                                    </button>
                                    {"   "}
                                    <button 
                                        className="searchbtn" 
                                        type="submit" 
                                        onClick={HandleFormSubmit}>
                                         Search
                                    </button>
                                    <ul>   
                                        {books.length > 0 && books.map(items => (
                                          <>
                                            <li
                                                className="card1">Title:{items.volumeInfo.title}
                                            </li>
                                            <li 
                                                className="card2">Synopsis :
                                            </li>
                                            <li     
                                                className="card3">Author :
                                            </li>
                                            </>
                                            ))}
                                        </ul>
                                        <a href="#"><img src="https://via.placeholder.com/100"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Results;