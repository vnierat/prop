import React, {useState, useEffect} from 'react';
import ClientCard from './ClientCard';

const ClientsList = (props) => {
    const [clients, setClientsList,] = useState([]);
    const { property } = props;

    useEffect(()=>{
        fetch('https://gist.githubusercontent.com/YoannDelpierre/717050b63c62816cacf556d4d84669e4/raw/77fa776d025a1b189d9e65b4708596d93561f994/generated-customers.json')
        .then(response => response.json())
        .then(setClientsList);
    }, []);

    const arraySt = clients.map(surfaces => 
        surfaces.search.surface
    );

   
    const closestFromPropertySurface = arraySt.reduce((prev, curr) =>
        (Math.abs(curr - property.surface) < Math.abs(prev - property.surface) ? curr : prev),null
    );

    let filteredClients = clients.filter((currentClient) => 
        currentClient.search.rooms === property.rooms && currentClient.search.budget >= property.price && currentClient.search.surface <= property.surface
    );
    // L'ensemble des clients de la liste recherchent des superficies supérieures à l'offre proposée => donc le résultat ne retournera aucun liste de clients potentiels :'(

   

    // On peut alors tenter de trouver les clients dont la recherche se rapproche le plus de l'offre proposée
    if (filteredClients.length === 0) {
        filteredClients = clients.filter((currentClient) => 
            (currentClient.search.rooms === property.rooms && currentClient.search.budget >= property.price && currentClient.search.surface === closestFromPropertySurface) // ici on retourne un resultat concernant la surface mais avec un "ou" || on peut chercher la valeur la plus proche pour le budget, etc...
        );
        return (
            filteredClients.map((filteredClient) => {
                return(
                    <ClientCard key={filteredClient.id} filteredClient={filteredClient}/>
                );
            })
        );
    }

    return (
        filteredClients.map((filteredClient) => {
            return(
                <ClientCard key={filteredClient.id} filteredClient={filteredClient}/>
            );
        })
    );
}
export default ClientsList;