import React, { useState } from "react";
import "../BookSearch/BookSearch.css";
import API from "../utils/API"; 

function BookSearch () {
    const [newBook ,setBookSearch] = useState("");


    const HandleInputChange =(event) => {
        setBookSearch(event.target.value);
        console.log(newBook)
    }

    const HandleFormSubmit = (event) => {
        event.preventDefault();
        console.log(" Book Search button submitted")
        API.addBooks({
            title: newBook
        })
        
    }




    return (
            <>
            <div className="shadow-lg p-3 mb-5 rounded">
                <div 
                    className="jumbotron2">
                <div 
                    className="container">
                   <h3 
                     className="display-4"> 
                     Books Search
                    </h3>
                        <p 
                            className="lead">
                            Book
                        </p>
                        <input 
                            name="searchBook"
                            type="text"
                             onChange={HandleInputChange}
                             className="form-control" 
                             id="searchBar" 
                             aria-describedby="SearchHelp" 
                             placeholder="Search"
                             />
                            <button 
                                className="searchbtn" 
                                type="submit" 
                                onClick={HandleFormSubmit}
                              >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default BookSearch;