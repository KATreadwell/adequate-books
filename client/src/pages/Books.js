import React, { Component } from "react";

class Books extends Component {

    state = {
        books: []
    }

    // componentDidMount() {
    //     fetch('/api/books')
    //         .then(res => res.json()
    //             .then((data) => {
    //                 console.log(data);
    //             }) 
    //             this.setState({
    //                 books: data
    //             })
    //     }


    render() {
        const { books } = this.state;
        return (
            <div>
                <h1>My Saved Books</h1>
                {books && books.length > 0 && (
                    books.map(book => (
                        <div key={book._id}>
                            {book.title}
                        </div>
                    ))
                )}
            </div>
        )
    }
}

export default Books
