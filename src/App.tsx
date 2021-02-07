// React Imports
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// Component Imports
import RoutesClient from "./components/RoutesClient";

// CSS Imports
import "./App.css";

function App() {
  return (
    <div>
      <RoutesClient />
    </div>
  );
}

export default App;
