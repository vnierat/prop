import { useEffect, useState } from "react";

export const useProperty = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/YoannDelpierre/8f0c43a7e0fb15bbcd888b6604a1583b/raw/f2910bef1e8e8023c36b057f0afe1f47686c9311/generated-property.json"
    )
      .then((response) => response.json())
      .then(setProperty);
  }, []);

  return property;
};
