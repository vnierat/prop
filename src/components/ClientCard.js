import React from 'react';

const ClientCard = (props) => {
    const { filteredClient } = props;

    const formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(filteredClient.search.budget);
    
    return(
        <div className="borderShadow clientCard">
            <div className="contactInfos">
                <div>{filteredClient.firstName} {filteredClient.lastName}</div>
                <div>{filteredClient.email}</div>
                <div>{filteredClient.phone}</div>
            </div>
            <div className="contactInfos mt">
                <div>Recherche : </div>
                <div>pièces : {filteredClient.search.rooms}</div>
                <div>surface : {filteredClient.search.surface}m2</div>
                <div>budget : {formattedPrice}€</div>
            </div>
            
        </div>
    )
}
export default ClientCard;