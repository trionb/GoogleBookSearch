import React, { useState } from "react";
import "../Saved/Saved.css"


const HandleFormSubmit = (event) => {
    event.preventDefault();
    console.log("View button clicked")
   
}
const HandleDeleteChange = (event) => {
    event.preventDefault();
    console.log("Delete button clicked")
}
///***?????////////// */

function Results() {
    return (
        <>
            <div className="shadow-lg p-3 mb-5 rounded">
                <div className="jumbotron3">
                    <div className="container">
                        <h3 className="display-4">Saved</h3>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <button
                                            className="searchbtn"
                                            type="submit"
                                            // href={bookList.volumeInfo.infoLink}
                                            onClick={HandleFormSubmit}>
                                            View
                                    </button>
                                        {"   "}
                                        <button
                                            className="deletebtn"
                                            type="submit"
                                            onClick={HandleDeleteChange}>
                                            Delete
                                        </button>
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