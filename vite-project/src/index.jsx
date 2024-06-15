import "./index.css";
import ReactDOM from "react-dom/client";

// Tailwind
const paragraphElement = <p className="bg-green-500">Hello World</p>; // React Element

// External CSS
const heading = <h1 className="para">Heading</h1>;

// Inline CSS
const spanElement = <span style={{ color: "red" }}>Inline css</span>;

const Para=()=>{
    return(
    <>
    <p>Hello</p>
    <ul>
        <li>car</li>
        <li>bike</li>
    </ul>
    </>)
}
const Headng=()=>{
    return(<div>
        <p>Welcome</p>
    </div>)
}

const App=()=>{
    return (
        <>
        <Headng/>
        <Para/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);