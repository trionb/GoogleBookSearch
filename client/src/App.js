import React from "react";
import Nav from "./components/Nav/Nav"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import BookSearch from "./components/BookSearch/BookSearch"
import Results from "./components/Results/Results"

function App () {
    return (
            <>
            <Nav />
            <Jumbotron />
            <BookSearch />
            <Results />
            </>
    );
}
export default App;