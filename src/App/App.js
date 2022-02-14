import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "../components/Home/Home";
import MainCat from "../components/MainCat/MainCat";
import MainDog from "../components/MainDog/MainDog";
import React from "react";
import s from './App.module.css'
import Favorite from "../components/Favorite/Favorite";


function App() {
  return (
      <div className={s.imgContent}>
          <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cat" element={<MainCat />} />
              <Route path="/dog" element={<MainDog />} />
              <Route path="/favorite" element={<Favorite/>} />
          </Routes>
      </div>
  );
}

export default App;

