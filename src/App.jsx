import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Header from './componenets/Header.jsx';
import Herosec from "./componenets/Herosec.jsx";
import Mapping from "./componenets/Mapping.jsx";
import Mapevents from "./componenets/Mapevents.jsx";
import Sign from "./componenets/Sign.jsx";
import Footer from "./componenets/Footer.jsx"
import About from "./pages/About.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <Herosec />
              <Mapping />
              <Mapevents />
              <Sign />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;
