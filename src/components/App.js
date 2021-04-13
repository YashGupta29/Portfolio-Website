import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("#1414be");

  const changeTheme = (color) => {
    setTheme(color);
  };

  var style = { "--primary": theme };
  return (
    <body style={style}>
      <div className="container">
        <Router>
          <Navbar changeTheme={changeTheme} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </body>
  );
}

export default App;
