import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
    </BrowserRouter>  
  );
}

export default App;
