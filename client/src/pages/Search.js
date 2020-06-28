import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <><form>
                <label>
                <span>Use any search term to find a book!</span>
                <input type="search"/>
                </label>
                    <button type="Submit">Submit</button> 
                </form>
                <span>Books Returned</span>
            </>

        );
    };
}

export default Search
