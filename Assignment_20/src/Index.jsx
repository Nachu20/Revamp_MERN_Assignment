import React from 'react'
import Header from './Header'
import Body from './Body'
import "./index.css";
import ReactDOM from "react-dom/client";

const Index = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);