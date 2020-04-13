import React, { useState, useEffect } from "react";
import API from "../utils/API"
import "../Results/Results.css"


const HandleFormSearch = (event) => {
    event.preventDefault("Search Results button clicked");
    console.log()
}
const HandleFormSubmit = (event) => {
    event.preventDefault();
    console.log("View button clicked")
    this.setState({
        search: event.target.value.toLowerCase()
  
      })
}                                                                       
                                            ///***?????////////// */

function Results () {
    const [books,setBooks] = useState([]);
     
    const loadBooks =() => {
     API.Search()
       .then(res => {
           console.log(res.data)
           setBooks(res.data.items)
           console.log(books)
       })
    }

    useEffect(()=>{
        loadBooks();
    //     API.Search()
    //   .then(res => {
    //     console.log(res.data)
    //     setBooks(res.data)
    //   })
    //   .catch(err => console.log(err))
  },[])
    
   
    return (
        <>
            <div className="shadow-lg p-3 mb-5 rounded">
                <div className="jumbotron3">
                    <div className="container">
                        <h3 className="display-4">Results</h3>
                        {books.length > 0 && books.map(bookList => (
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
                                        onClick={HandleFormSearch}>
                                         Saved
                                    </button>
                                           <>
                                    <ul>  
                                            <li
                                                className="card1">Title:{bookList.volumeInfo.title}
                                            </li>
                                            <li 
                                                className="card2">Synopsis :{bookList.volumeInfo.title}
                                            </li>
                                            <li     
                                                className="card3">Author :{bookList.volumeInfo.title}
                                            </li>
                                        </ul>
                                        <a href="#"><img src="https://via.placeholder.com/100"/></a>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Results;