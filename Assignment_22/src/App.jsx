import React from 'react'
import Product from './Product'
import "./index.css"
import ReactDOM from "react-dom/client";
import Login from './Login';

const App = () => {
  return (
    <div>
      <Login />
      <Product />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

