import React, { Component } from "react";
import starfull from "../../svg/starfull.svg";
import starempty from "../../svg/starempty.svg";
import "./hostinfo.css";

class HostInfo extends Component {
  render() {
    const { hostinfo, rating } = this.props;
    return (
      <div className="col-12 col-lg-4 host d--flex flex--column align-items--center justify--space-between">
        <div className="d--flex align-items--center justify--end host__container">
          <div className="host__name text--primary mr--xs text--right">{hostinfo.name}</div>
          <div>
            <img src={hostinfo.picture} className="host__picture" alt={hostinfo.name} />
          </div>
        </div>
        <div className="star-rating text--right">
          {/* si le rating est égale 1 alors on place une étoile pleine et 4 étoiles vides, etc */
          /** Tester avec une boucle */}
          {function() {
            let stars = [];
            for(let i = 0; i < 5; i++ ) {
              if(rating <= i) {
                stars.push(<img src={starempty} key={i} alt="grey stars" />);
              } else {
                stars.push(<img src={starfull} key={i} alt="red stars" />)
              }
            }
            return (
              <>
                {stars}
              </>
            )
          }()
          }
        </div>
      </div>
    );
  }
}

export default HostInfo;
