import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Scroll from "./components/Scroll";
import Lenis from "@studio-freight/lenis";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  const lenis = new Lenis({
    duration: 1.3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <Router>
      <div className="app">
        {/* <Scroll /> */}

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
