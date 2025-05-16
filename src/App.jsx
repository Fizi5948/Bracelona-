import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Header from './componenets/Header.jsx';
import Herosec from "./componenets/Herosec.jsx";
import Mapping from "./componenets/Mapping.jsx";
import Mapevents from "./componenets/Mapevents.jsx";
import Sign from "./componenets/Sign.jsx";
import Footer from "./componenets/Footer.jsx"
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Herosec />
      <Mapping />
      <Mapevents />
      <Sign/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
