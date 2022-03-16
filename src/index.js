import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Calculator from "./main/Calculator";


ReactDom.render(
    <React.Fragment>
    <h1>Calculadora</h1>
    <Calculator />
    </React.Fragment>, 
    document.getElementById('root')
);