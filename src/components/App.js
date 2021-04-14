import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./pages/Footer";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let curURL = window.location.href;
    if (curURL.endsWith("/")) setTheme("#1414be");
    else if (curURL.endsWith("/about")) setTheme("#b8b5ff");
    else if (curURL.endsWith("/projects")) setTheme("grey");
    else if (curURL.endsWith("/contact")) setTheme("green");
  }, [theme]);

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
          <Footer />
        </Router>
      </div>
    </body>
  );
}

export default App;
