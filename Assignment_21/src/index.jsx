import ReactDOM from "react-dom/client";
import Search from "./Search"

const App = () => {
    return (
        <>
         <Search />
        </>

)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); 