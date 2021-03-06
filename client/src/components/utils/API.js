import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=hobbit&maxResults=40";


// Export an object with a "search" method that searches the Giphy API for the passed query
// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the googlebook api for   { params: { q: query } }
export default {
  Search: function(searchTerm) {
   var URl="https://www.googleapis.com/books/v1/volumes?q="+searchTerm+"&maxResults=40"
    return axios.get(BASEURL);
  },
  getBooks: function() {    
    return axios.get(BASEURL);    
  },
  addBooks: function (bookData) {
    return axios.post("/api/books", bookData)
  },
 // Deletes the book with the given id
 deleteBooks: function(id) {
  return axios.delete("/api/books/" + id);
},
 // Saves a book to the database
 saveBooks: function(bookData) {
  return axios.post("/api/books", bookData);
}

};
