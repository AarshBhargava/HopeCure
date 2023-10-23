import React from "react";
import MainPage from "./Page2/MainPage";
import { Route, Routes } from "react-router";
import Text from "./Page1/Textarea";
import Projects from "./Page1/projects";
import Gallery from "./Page1/Gallery";
import Test from "./Page1/Test";
import Faq from "./Page1/Faq";
import Join from "./Page1/Join";
import Lastpanel from "./Page1/Lastpanel";
import "./Page1/Heropage.css";
import FirstPage from "./Page1/FirstPage";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" />
        <Route path="/Mainpage" Component={MainPage} />
      </Routes>
      <FirstPage />
      <Text />
      <Projects />
      <Gallery />
      <Test />
      <Faq />
      <Join />
      <Lastpanel />
    </div>
  );
}

export default App;
