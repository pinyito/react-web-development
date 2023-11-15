import React from "react";
import  ReactDOM  from "react-dom";

function App(){
    return <h1>Hello world!</h1>
}

// To hook our component to the html template, we need to render it into the DOM
ReactDOM.render(
    <App />,
    document.getElementById("root")
)