import React, { Component } from "react";
import './detailsAccordions.css';
import Description from "../Description/Description";
import Equipments from "../Equipments/Equipments";

class DetailAccordions extends Component {
  render() {
    const { equipmentProps, descriptionProps } = this.props;
    return (
      <div className="details-container container my-4">
        <div className="row">
          <Description description={descriptionProps} />
          <Equipments equipments={equipmentProps} />
        </div>
      </div>
    );
  }
}

export default DetailAccordions;
