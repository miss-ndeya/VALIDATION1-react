import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="App pb-4 min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
