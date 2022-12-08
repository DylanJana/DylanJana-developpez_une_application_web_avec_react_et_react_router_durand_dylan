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


function Detail() {
  const parameters = useParams();
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
        <>
          <Header />
          <div>
            <Slider cardinfo={card} />
            <div className="container my-4">
              <div className="row">
                <TitleAddress
                  title={card.title}
                  localisation={card.location}
                  tags={card.tags}
                />
                <HostInfo hostinfo={card.host} rating={card.rating} />
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
        <Page404 />
      )}
    </div>
  );
}

export default Detail;