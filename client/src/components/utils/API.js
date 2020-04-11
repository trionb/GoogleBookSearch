import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=40";


// Export an object with a "search" method that searches the Giphy API for the passed query
// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the googlebook api for   { params: { q: query } }
export default {
  Search: function() {
    return axios.get(BASEURL);
  },
  getBooks: function() {    
    return axios.get("/api/books",);    
  },
  addBooks: function (bookData) {
    return axios.post("/api/books", bookData)
  },
 // Deletes the book with the given id
 deleteBook: function(id) {
  return axios.delete("/api/books/" + id);
},
 // Saves a book to the database
 saveBook: function(bookData) {
  return axios.post("/api/books", bookData);
}

};
