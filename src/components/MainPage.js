import React, {useState, useEffect} from 'react';
import AppartInfos from './AppartInfos';
import ClientsList from "./ClientsList";

const MainPage = () => {
    const [property, setProperty] = useState([]);

    useEffect(()=>{

        fetch('https://gist.githubusercontent.com/YoannDelpierre/8f0c43a7e0fb15bbcd888b6604a1583b/raw/f2910bef1e8e8023c36b057f0afe1f47686c9311/generated-property.json')
        .then(response => response.json())
        .then(setProperty);
    }, []);

    return(
        <>
            <div className="mainPage">
                <div className="container">
                    <AppartInfos property={property} />
                    <div className="bold">Potentiels clients intéressés :</div>
                    <ClientsList property={property} /> 
                </div>
            </div>
        </>
    );
}
export default MainPage;