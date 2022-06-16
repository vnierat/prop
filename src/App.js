import { Fragment } from "react";
import "./assets/css/global.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Fragment>
      <Header />
      <MainPage />
    </Fragment>
  );
};

export default App;
