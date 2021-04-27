import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter.jsx";
import Movies from "./components/movie.jsx";

ReactDom.render(<Movies />, document.getElementById("root"));
