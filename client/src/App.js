import React, { useState }from "react";
import Nav from "./components/Nav/Nav"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import BookSearch from "./components/BookSearch/BookSearch"
import Results from "./components/Results/Results"
import Saved from "./components/Saved/Saved"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App () {
    const [books, setBooks] = useState([]);

    return (
        <Router>
            <>
            <Nav />
            <Jumbotron />
            <BookSearch setBooks={setBooks}/>
            <Results books={books}/>
            <Switch>
            <Route 
                exact path="/saved" 
                component={Saved}
            />
            </Switch>
            </>
        </Router>
    );
}
export default App;