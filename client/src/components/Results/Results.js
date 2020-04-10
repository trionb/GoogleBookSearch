import React from "react";
import "../Results/Results.css"

function Results () {
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
                                        onChange="HandleInputChange">
                                         View
                                    </button>
                                    {"   "}
                                    <button 
                                        className="searchbtn" 
                                        type="submit" 
                                        onChange="HandleInputChange">
                                         Search
                                    </button>
                                        <ul>
                                            <li 
                                                className="card1">Title :
                                            </li>
                                            <li 
                                                className="card2">Synopsis :
                                            </li>
                                            <li     
                                                className="card3">Author :
                                            </li>
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