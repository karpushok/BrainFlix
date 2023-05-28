import "./App.scss";
import { useEffect, useState } from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import Header from "./components/Header/Header";


//TODO 
/**
  *
  * search bar stick to the right on desktop
  * 
  * 
  * 
  * add delete comment
  * 
  * refactor
  * 
  * 
  * 
  **/




function App() {
  const apiKey = useLoaderData();
  const [api, setApi] = useState(null)
  

  useEffect(() => {
    if(Boolean(apiKey)) setApi(apiKey)
    if (!Boolean(sessionStorage.getItem("apiKey"))) sessionStorage.setItem('apiKey', JSON.stringify(apiKey))
  // no need for api_key as deps because it is a constant and doesn't change during session
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
      <div className="container">
        <Header />
      {api && <Outlet />}
      {!api && <>Please register!</>}
      </div>
  );
}

export default App;
