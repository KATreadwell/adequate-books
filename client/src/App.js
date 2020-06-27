import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";

const About = () => <h1>About</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <Link to="/">Home</Link><br/>
         <Link to="/about">About</Link>
         <Link to="/books">Books</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/books" component={Books} />
          <Route path="/books/:id" component={Book} />
        </Switch>
      </div>
    );
  }
}

export default App;
