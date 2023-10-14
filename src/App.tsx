import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/UI/Navbar/Navbar';
import Home from './Components/Views/Home/Home';
import Footer from './Components/UI/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Home />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
