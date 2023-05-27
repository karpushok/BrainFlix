import "./App.scss";
import { useEffect } from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const apiKey = useLoaderData();

  useEffect(() => {
    sessionStorage.setItem('apiKey', JSON.stringify(apiKey))
  // no need for api_key as deps because it is a constant and doesn't change during session
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasKey = Boolean(sessionStorage.getItem("apiKey"))

  return (
      <div className="container">
        <Header />
      {hasKey && <Outlet />}
      {!hasKey && <>Please register!</>}
      </div>
  );
}

export default App;
