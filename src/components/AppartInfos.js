import React from 'react';

const AppartInfos = (props) => {
    const { property } = props;

    const formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(property.price);
    

    return(
        <div className="card borderShadow">
            <div className="w50">
               <img className="imgAppart" src="https://www.book-a-flat.com/magazine/wp-content/uploads/2016/12/espace-optimise-appartement-meuble-paris.jpg" alt="appart"/> 
            </div>
            
            <div className="infosCard">
                <div className="fontTitle">Ce bien comporte</div>
                <div className="elem"><span className="fontType">Type de bien : </span> { property.type === "house"  ? "maison" : 'appartement' }</div>
                <div className="elem"><span className="fontType">Nombre de pièces : </span> { property.rooms } pièces </div>
                <div className="elem"><span className="fontType">Surface : </span> { property.surface }m2</div>
                <div className="elem"><span className="fontType">Cave :</span> { property.cave === true  ? "oui" : 'non'}</div>
                <h4>{ formattedPrice }€</h4>
            </div>
        </div>
    )
}
export default AppartInfos;