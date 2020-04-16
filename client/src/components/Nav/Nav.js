import React from "react";
import BookSearch from "../BookSearch/BookSearch"
import "../Nav/Nav.css"


const HandleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(" Nav Search button clicked")
}
const HandleSaveSubmit = (event) => {
    event.preventDefault();
    console.log(" Nav Save button clivked")
}

function Nav() {
    return (
        <>
            <nav
               className="navbar navbar-expand-lg navbar-light bg-light">
                <a 
                   className="navbar-brand" href="#">Google Books
                </a>
                <button 
                     className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span 
                        className="navbar-toggler-icon">
                    </span>
                </button>
                <div 
                   className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul 
                        className="navbar-nav mr-auto">
                         <li 
                                className="nav-item">
                              <a 
                                className="nav-link" 
                                href={BookSearch}
                                onClick={HandleSearchSubmit}
                                >Search
                             </a>
                        </li>
                        <li 
                            className="nav-item">
                           <a 
                              className="nav-link" 
                              href="#"
                              onClick={HandleSaveSubmit}
                              >Saved
                           </a>
                        </li>
                    </ul>
                </div>
            </nav>
         </>
            );
        }
        
export default Nav;