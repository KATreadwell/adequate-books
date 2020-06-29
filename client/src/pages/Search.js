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
        books: []
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        {/* <Jumbotron> */}
                        <h1>Time to find some books!</h1>
                        {/* </Jumbotron> */}
                        <Container fluid>
                            <form>
                                <label>
                                    <span>Use any search term to find a book!     </span>
                                    <input type="search" />
                                </label>
                                <button type="Submit">Submit</button>
                            </form>

                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <ListItem key={book._id}>
                                            <Link to={"/books/" + book._id}>
                                                <strong>
                                                    {book.title} by {book.author}
                                                </strong>
                                            </Link>
                                            {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
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
