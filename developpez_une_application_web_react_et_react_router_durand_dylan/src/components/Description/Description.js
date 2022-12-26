import React, { Component } from "react";
import arrow from "../../images/arrow-down.png";
import "./description.css";

class Description extends Component {
  // avec React la création d'un constructor est obligatoire pour créer un state ou l'utiliser.
  constructor(props) {
    //Récupère les props présentes de la classe parente.
    super(props);
    // State signifie statut. Avec React par ex obtenir un statut cliqué ou non cliqué pour un bouton on crée un state.
    this.state = {
      //création d'un state "descriptionOn" pour gérer le controle lors d'un clic.
      descriptionOn: false
    };
  }

  changeDescriptionState = () => {
    this.setState({
      // J'attribue à descriptionOn la valeur contraire de son statut actuel. False devient True, True devient False. 
      descriptionOn: !this.state.descriptionOn,
    });
  };
  render() {
    const { description } = this.props;
    return (
      <div className="column col-12 col-lg-6">
        <div
          className="dropdown__title d--flex align-items--center justify--space-between br--sm"
          onClick={this.changeDescriptionState}
        >
          <p>Description</p>
          <div>
            {this.state.descriptionOn ? (
              <img src={arrow} className="img-fluid arrow-img" alt='arrow indicator' />
            ) : (
              <img src={arrow} className="img-fluid arrow-img--rotate" alt='arrow indicator' />
            )}
          </div>
        </div>
        {this.state.descriptionOn ? (
          <div className="dropdown__content br--sm">{description}</div>
        ) : null}
      </div>
    );
  }
}

export default Description;
