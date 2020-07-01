import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <span className="view-btn" {...props} role="button" tabIndex="0">
      ✗
      <a href="https://www.googleapis.com/books/v1/volumes?q=" />
    </span>
  );
}

export default ViewBtn;
