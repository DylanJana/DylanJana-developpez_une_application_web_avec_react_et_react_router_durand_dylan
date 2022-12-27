import React, { Component } from "react";
import '../../App.css';
import arrow from "../../images/arrow-down.png";

class Equipments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      equipmentsOn: false,
    };
  }

  changeEquipmentsState = () => {
    this.setState({
      // J'attribue à equipmentsOn la valeur contraire de son statut actuel. False devient True, True devient False. 
      equipmentsOn: !this.state.equipmentsOn
    });
  };

  render() {
    const { equipments } = this.props;

    return (
      <div className=" column col-12 col-lg-6 equipments-area">
        <div 
          className="dropdown__title d--flex align-items--center justify--space-between br--sm" 
          onClick={this.changeEquipmentsState}
        >
          <p>Equipements</p>

          <div>
            {this.state.equipmentsOn ? (
              <img src={arrow} className="img-fluid arrow-img" />
            ) : (
              <img src={arrow} className="img-fluid arrow-img--rotate" />
            )}
          </div>
        </div>

        {this.state.equipmentsOn ? (
          <div className="dropdown__content br--sm">
            {equipments.map((equipment, i) => {
              return (
                <div key={i} className="equipment">
                  {equipment}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
export default Equipments;
