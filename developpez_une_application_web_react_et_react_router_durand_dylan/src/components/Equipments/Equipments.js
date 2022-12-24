import React, { Component } from "react";
import arrowup from "../../images/arrow-up.png";
import arrowdown from "../../images/arrow-down.png";
import "./equipments.css";

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
      <div className="col-12 col-lg-6 equipments-area">
        <div className="equipments-title" onClick={this.changeEquipmentsState}>
          <div className="equipments-text">Equipements</div>

          <div>
            {this.state.equipmentsOn ? (
              <img src={arrowdown} className="img-fluid arrow-img" />
            ) : (
              <img src={arrowup} className="img-fluid arrow-img" />
            )}
          </div>
        </div>

        {this.state.equipmentsOn ? (
          <div className="equipments-bigtext">
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
