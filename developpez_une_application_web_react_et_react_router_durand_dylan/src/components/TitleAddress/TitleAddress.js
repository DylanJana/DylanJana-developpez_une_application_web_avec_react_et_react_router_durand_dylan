import React, { Component } from "react";
import "./titleaddress.css";

class TitleAddress extends Component {
  render() {
    // Récupération des propos envoyé via le parent Details , il est important de réutiliser le nom des keys
    const { title, localisation, tags } = this.props;
    return (
      <div className="col-12 col-lg-8">
        <div className="title--lg text--primary">{title}</div>
        <div className="text--primary paragraph--sm mb--sm">{localisation}</div>
        <div className="box-tag__container">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="box-tag__item suptitle br--sm">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TitleAddress;
