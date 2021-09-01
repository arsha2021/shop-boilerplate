import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Side from "./components/Side";
import Quote from "./components/Quote";
import LineSeperator from "./components/LineSeperator";
import SingleBlog from "./components/SingleBlog";
import Shop from "./components/Shop";
import Camps from "./components/Camps";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Row">
        <Side id={1} />
        <div className="Container">
          <Header />
          <Home />
          <Quote />
          <LineSeperator />
          <SingleBlog />
        </div>
      </div>
      <div>
        <Shop />
      </div>
      <div>
        <div className="Container">
          <Camps />
        </div>
      </div>
      <div>
        <Join />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
