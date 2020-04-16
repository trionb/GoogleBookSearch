import React from "react";
import "../Results/Results.css"


///***?????////////// */

function Results({books}) {
    const HandleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(" View Book button clicked")
}
const HandleFormSearch=()=>{

}
//  books.map(book=>{
//     console.log(book.volumeInfo.imageLinks.smallThumbnail)
//  })
//  console.log(books[0].volumeInfo.imageLinks)
    return (
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
                                            onClick={HandleFormSubmit}
                                            href={bookList.volumeInfo.previewLink}
                                            >
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
                                                    className="card1">{bookList.volumeInfo.title}
                                                </li>
                                                <li
                                                    type="text" maxLength="20" className="card2">{bookList.volumeInfo.description}
                                                </li>
                                                <li
                                                    className="card3">{bookList.volumeInfo.authors}
                                                </li>
                                            </ul>
                                            {/* doesnt link using smallThumbnail */}
                                            {/* <a href={bookList.volumeInfo.imageLinks.smallThumbnail}><img src={bookList.volumeInfo.imageLinks.smallThumbnail} /></a> */}
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Results;