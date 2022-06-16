import React, { Fragment } from "react";
import { useProperty } from "../api/property";
import AppartInfos from "./AppartInfos";
import ClientsList from "./ClientsList";

const MainPage = () => {
  const property = useProperty();

  return (
    <Fragment>
      <div className="mainPage">
        <div className="container">
          <AppartInfos property={property} />
          <div className="bold">Potentiels clients intéressés :</div>
          <ClientsList property={property} />
        </div>
      </div>
    </Fragment>
  );
};
export default MainPage;
