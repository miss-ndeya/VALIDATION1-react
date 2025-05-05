import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="text-primary">Mes Posts</h1>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
