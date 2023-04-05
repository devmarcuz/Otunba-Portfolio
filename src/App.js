import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                showAnimation={showAnimation}
                setShowAnimation={setShowAnimation}
              />
            }
          />
          <Route path="/work" exact element={<Work />} />
          <Route path="/shelf" exact element={<Blog />} />
          <Route path="/shelf/:id" exact element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
