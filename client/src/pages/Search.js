import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {
    state = {
        books: [],
        search: ""
    };

handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("/api/search", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ searchTerm: this.state.search })
    })
        .then(res => res.json())
        .then(data => {
            console.log('This line is best.');
            this.setState({ books: data });
        });
}

handleInputChange = (event) => {
    const {name, value} = event.target;

    event.preventDefault();
    this.setState({
        [name]: value
    });
}


render() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <h1>Time to find some books!</h1>
                    <Container fluid>

                        <label>
                            <span>Use any search term to find a book!     </span>
                            <input
                                name="search"
                                value={this.state.search}
                                type="search"
                                placeholder="pick something trashy"
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleFormSubmit}>Submit</button>


                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <strong>
                                                {book.volumeInfo.title} by {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}
                                            </strong>
                                        </Link>
                                        {/* <SaveBtn onClick={() => this.Book(book._id)} />
                                            <ViewBtn onClick={() => this.Book(book._id)} /> */}
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
}

export default Search
