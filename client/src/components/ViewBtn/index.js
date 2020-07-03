import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    // <span className="view-btn" {...props} role="button" tabIndex="0">
    //   VIEW
    //   <a href="https://www.googleapis.com/books/v1/volumes?q=?" />
    // </span>
    <a className="btn btn-primary" href={props.redirect} target="_blank" rel="noopener noreferrer">View</a>
    
  );
}

export default ViewBtn;
