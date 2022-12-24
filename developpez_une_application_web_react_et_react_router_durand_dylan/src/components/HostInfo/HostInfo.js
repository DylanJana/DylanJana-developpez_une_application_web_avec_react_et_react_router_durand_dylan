import React, { Component } from "react";
import "./hostinfo.css";
import starfull from "../../images/starfull.svg";
import starempty from "../../images/starempty.svg";

class HostInfo extends Component {
  render() {
    const { hostinfo, rating } = this.props;
    return (
      <div className="col-12 col-lg-2 parent-div">
        <div className="host-parent">
          <div className="host-name">{hostinfo.name}</div>
          <div>
            <img src={hostinfo.picture} className="img-fluid host-picture" />
          </div>
        </div>
        <div className="star-rating">
          {/* si le rating est égale 1 alors on place une étoile pleine et 4 étoiles vides, etc */
          /** Tester avec une boucle */}
          {function() {
            let stars = [];
            for(let i = 0; i < 5; i++ ) {
              if(rating <= i) {
                stars.push(<img src={starempty} key={i} />);
              } else {
                stars.push(<img src={starfull} key={i} />)
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

function AddorRemoveStars(rating) {
  for(let i = 0; i < 5; i++ ) {
    if(rating <= i) {
      let starFull = new Image();
      starFull.src = "images/starfull.svg";
      let div = document.createElement('div').appendChild(starFull);
      document.querySelector('body').appendChild(div)
    } else {
      <img src={starempty} />
    }
  }
}
