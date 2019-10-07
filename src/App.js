import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route path="/" component={Footer} />
    </BrowserRouter>  
  );
}

export default App;
