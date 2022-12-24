import React, { Component } from "react";
import chevronhaut from "../../images/arrow-up.png";
import chevronbas from "../../images/arrow-down.png";
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
      <div className="col-12 col-lg-6 description-area">
        <div
          className="description-title"
          onClick={this.changeDescriptionState}
        >
          <div className="description-text">Description</div>
          <div>
            {this.state.descriptionOn ? (
              <img src={chevronbas} className="img-fluid arrow-img" />
            ) : (
              <img src={chevronhaut} className="img-fluid arrow-img" />
            )}
          </div>
        </div>
        {this.state.descriptionOn ? (
          <div className="description-bigtext">{description}</div>
        ) : null}
      </div>
    );
  }
}

export default Description;
