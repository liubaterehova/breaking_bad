import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import CharacterCards from "./components/organisms/CharacterCards";
import Filter from "./components/organisms/Filter";
import Template from "./components/template";
import SortButton from "./components/atoms/SortButton";
import ResetButton from "./components/atoms/ResetButton";

ReactDOM.render( < Template / > , document.getElementById("root"));