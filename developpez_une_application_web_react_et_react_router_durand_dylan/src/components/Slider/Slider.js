import React, { Component } from "react";
import "./slider.css";

class Slider extends Component {
  render() {
    // destructing props react
    // je récupère le props de detail.js qui est son parent. Ainsi que toutes les infos liés au props
    const { cardinfo } = this.props;
    return (
      // className=container permet l'alignement sur la gauche avec le logo
      <div>
        {/* Récupération des codes carousel à partir du site web de bootstrap. */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner br--md">
            {/*l'ajout d'active après "carousel-item" signifie qu'il faut l'affiché. */}
            <div className="carousel-item active">
              {/* Affichage en démarrant par la photo courante (=cliquée) avec l'index est 0 */}
              <img src={cardinfo.pictures[0]} className="carousel-item__img br--md img-fluid" alt={cardinfo.title}
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Démarrage par un comptage commençant par sur le nombre total des photos */}
                <p>
                  1 / {cardinfo.pictures.length}
                </p>
              </div>
            </div>
            {cardinfo.pictures.map((picture, index) => {
              if (index !== 0) {
                return (
                  <div key={index} className="carousel-item">
                    <img src={picture} className="carousel-item__img img-fluid" alt={cardinfo.title}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      {/* comme l'index commence par 0 alors on ajoute +1. */}
                      <p>
                        {index + 1} / {cardinfo.pictures.length}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          {
            // s'il y a plus d'une photo affiche la flèche précédente et suivante.
            cardinfo.pictures.length > 1 ? (
              <>
                <button className="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <svg width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="currentColor"/>
                </svg>
                </button>
                <button className="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <svg width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="currentColor"/>
                </svg>
                </button>
              </>
            ) : null
          }
        </div>
      </div>
    );
  }
}
export default Slider;
