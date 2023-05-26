import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";


const API_videos = 'https://project-2-api.herokuapp.com/videos'

function App() {
  
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <MainLayout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
