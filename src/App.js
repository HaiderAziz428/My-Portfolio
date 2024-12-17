import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes for your app */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
