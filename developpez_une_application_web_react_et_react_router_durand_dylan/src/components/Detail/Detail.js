// Fonctions React useEffet pour récupération des données et useState pour suivre l'état d'un composant fonction.
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import ListCards from "../../data.json";
import TitleAddress from "../TitleAddress/TitleAddress";
import HostInfo from "../HostInfo/HostInfo";
import DetailAccordions from "../DetailAccordions/DetailAccordions";
import Page404 from "../Page404/Page404";
// Utilisation d'un composant fonction pour pouvoir utiliser les fonctions useParams (), useEffet(), useState() . Points communs à ttes ces fct, c'est que leurs valeurs sont modifiables.
export default function Detail() {
//  useParams() crochet(=hook) permet de récupérer les paramètres dynamiques (ici l'id du logement ). Récupére les paramètres de l'URL
  const parameters = useParams();
  // ajout d'un state + la fonction de modification du state
  const [card, setCard] = useState(null);
  useEffect(() => {
    ListCards.map((lodging) => {
      if (lodging.id === parameters.lodgingid) {
        setCard(lodging);
      }
    });
  });
  return (
    <div>
      {card !== null ? (
        // Lorsque nous voulons utiliser plus d'un composant après return (plus haut), nous devons "l'emballer avec 2 chevrons au début et 2 à la fin : <>, </>".
        //<Slider cardinfo={card} /> = nous créons un props pour envoyer les informations de la carte au composant Slider. Nous pouvons lui donner le nom que nous voulons
        <>
          <Header />
          <div>
            {/* création et envoi des props(ex: cardinfo, title,...), cette action me permet de transmettre des données que je pourrais réutiliser dans le composant enfant */}
            <Slider cardinfo={card} />
            <div className="container my-4">
              <div className="row">
                <TitleAddress
                  title={card.title}
                  localisation={card.location}
                  tags={card.tags}
                />
                <HostInfo 
                hostinfo={card.host} 
                rating={card.rating} 
                />

                <DetailAccordions
                  equipmentProps={card.equipments}
                  descriptionProps={card.description}
                />
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        /** Si aucune card ne correspond à l'ID en cours, je renvoie l'utilisateur sur la 404 */
        <Page404 />
      )}
    </div>
  );
}
