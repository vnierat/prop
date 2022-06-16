import React from "react";

const ClientCard = (props) => {
  const {
    filteredClient: {
      firstName,
      lastName,
      email,
      phone,
      search: { rooms, budget, surface },
    },
  } = props;

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(budget);

  return (
    <div className="borderShadow clientCard">
      <div className="contactInfos">
        <div>
          {firstName} {lastName}
        </div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
      <div className="contactInfos mt">
        <div>Recherche : </div>
        <div>pièces : {rooms}</div>
        <div>surface : {surface}m2</div>
        <div>budget : {formattedPrice}</div>
      </div>
    </div>
  );
};
export default ClientCard;
