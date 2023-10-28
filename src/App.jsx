import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
