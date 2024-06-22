import ReactDOM from "react-dom/client";
import React from "react";
import Title from "./Title";
import Header from "./Header";
import './index.css'; 
//By nested element

// const heading1 = React.createElement("h1", null, "Hello");
// const heading2= React.createElement("h2", null, "Welcome");
// const heading3= React.createElement("h3", null, "Nachu");
// const nested = React.createElement("div", null, heading1, heading2,heading3);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nested);


// by Same Element Using JSX

// const nestedJSX = (
//   <div className="title">
//     <h1>Header 1</h1>
//     <h2>Header 2</h2>
//     <h3>Header 3</h3>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedJSX);

//Composition of Component
const Para=()=>{
    return(
    <>
    <Title/>
    <p>Hello</p>
    <ul>
        <li>car</li>
        <li>bike</li>
    </ul>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Header />);