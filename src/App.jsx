import "./App.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const hasApiKey = useLoaderData();

  return (
    <div className="container">
      <Header />
      {hasApiKey && <Outlet />}
      {!hasApiKey && <>Please register!</>}
    </div>
  );
}

export default App;
