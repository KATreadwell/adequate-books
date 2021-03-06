import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Search from "./pages/Search";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <>
      <Nav></Nav>
        <div className="App">
        <div className="App-header">
          <h1>React Google Books Search</h1>
         <Link to="/" id="link">Home</Link><br/>
         <Link to="/search" id="link">Search</Link><br/>
         <Link to="/books" id="link">My Saved Books</Link><br/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route exact path="/books" component={Books} />
        </Switch>
        </div>
      </div>
      </>
    );
  }
}

export default App;
