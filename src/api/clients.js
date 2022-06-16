import { useEffect, useState } from "react";

export const useClients = () => {
  const [clients, setClientsList] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/YoannDelpierre/717050b63c62816cacf556d4d84669e4/raw/77fa776d025a1b189d9e65b4708596d93561f994/generated-customers.json"
    )
      .then((response) => response.json())
      .then(setClientsList);
  }, []);

  return clients;
};
