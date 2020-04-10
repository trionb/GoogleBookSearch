import React from "react";
import "../BookSearch/BookSearch.css"

function BookSearch () {
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
                            type="text"
                             className="form-control" 
                             id="searchBar" 
                             aria-describedby="SearchHelp" 
                             placeholder="Search"
                             />
                            <button 
                                className="searchbtn" 
                                type="submit" 
                                onChange="HandleInputChange">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default BookSearch;