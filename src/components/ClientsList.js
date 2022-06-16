import React from "react";
import { useClients } from "../api/clients";
import ClientCard from "./ClientCard";

const ClientsList = ({ property }) => {
  const { surface, price, rooms } = property;

  const clients = useClients();

  const arraySt = clients.map(({ search: { surface } }) => surface);

  const closestFromPropertySurface = arraySt.reduce(
    (prev, curr) =>
      Math.abs(curr - surface) < Math.abs(prev - surface) ? curr : prev,
    null
  );

  let filteredClients = clients.filter(
    ({ search, search: { budget } }) =>
      search.rooms === rooms && budget >= price && search.surface <= surface
  );
  /* 
  L'ensemble des clients de la liste recherchent des superficies supérieures à l'offre proposée => donc le résultat ne retournera aucun liste de clients potentiels car l'appartement fait seulement 44m2 de superficie :'(

  DONC =>

   On peut alors tenter de trouver les clients dont la recherche se rapproche le plus de l'offre proposée 
   */
  if (filteredClients.length === 0) {
    filteredClients = clients.filter(
      ({ search, search: { budget, surface } }) =>
        search.rooms === rooms &&
        budget >= price &&
        surface === closestFromPropertySurface
      /* ici on retourne un resultat concernant la surface mais avec un "ou" || on peut chercher la valeur la plus proche pour le budget, etc...
       */
    );
    return filteredClients.map((filteredClient) => {
      return <ClientCard key={filteredClient.id} {...{ filteredClient }} />;
    });
  }

  return filteredClients.map((filteredClient) => {
    return <ClientCard key={filteredClient.id} {...{ filteredClient }} />;
  });
};

export default ClientsList;
