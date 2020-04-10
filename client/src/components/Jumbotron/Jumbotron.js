import React from "react";
import "../Jumbotron/Jumbotron.css"

function Jumbotron() {
    return (
        <div className="shadow-lg p-3 mb-5 rounded">
            <div className="jumbotron1">
                <div className="container">
                    <h1 className="display-4">Google Books Search</h1>
                    <p className="subHead">Search for and save books of interest.</p>
                </div>
            </div>
        </div>
    );
}
export default Jumbotron;