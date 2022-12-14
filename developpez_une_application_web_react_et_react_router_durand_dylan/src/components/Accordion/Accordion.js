import React, { Component } from 'react'
import arrow from "../../images/arrow-down.png";
import '../../App.css';
import './accordion.css';

class Accordion extends Component {
  
  render() {
    return (
      <div className='l-container--sm'>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">     
              <button className="accordion-button collapsed dropdown__title d--flex align-items--center justify--space-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <p className='paragraph--sm'>Fiabilité</p>
                <div>
                  <img src={arrow} className="img-fluid arrow-img" alt='arrow indicator' />
                </div>
              </button>
            </h2>       
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">         
              <div className="accordion-body dropdown__content br--sm">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed dropdown__title d--flex align-items--center justify--space-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <p className="paragraph--sm">Respect</p>
                <img src={arrow} className="img-fluid arrow-img" alt='arrow indicator' />
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body dropdown__content br--sm">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed dropdown__title d--flex align-items--center justify--space-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <p className="paragraph--sm">Service</p>
                <img src={arrow} className="img-fluid arrow-img" alt='arrow indicator' />
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body dropdown__content br--sm">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed dropdown__title d--flex align-items--center justify--space-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <p className="paragraph--sm">Sécurité</p>
                <img src={arrow} className="img-fluid arrow-img" alt='arrow indicator' />
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body dropdown__content br--sm">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
}

export default Accordion;
