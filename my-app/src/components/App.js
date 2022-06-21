import '../App.css';
import React from "react";
import CheesePage from "./CheesePage";
import Header from "./Header";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header />
     <CheesePage />
    </div>
  );
}

export default App;
