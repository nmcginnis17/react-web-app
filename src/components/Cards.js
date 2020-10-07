import React from 'react';
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return(
    <div className="cards">
      <h1>Our Solutions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/data-analysis.jpg"
              text="In Depth Data Analysis"
              label="Data Analysis"
              path="/"
            />
            <CardItem
              src="images/digital-marketing.jpg"
              text="State of the art Digital Marketing"
              label="Digital Marketing"
              path="/"
            />
            <CardItem
              src="images/seo.jpg"
              text="Get Found on Search Engines"
              label="SEO"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/graphic-design.jpg"
              text="Designs for the future"
              label="Graphic Design"
              path="/"
            />
            <CardItem
              src="images/web-dev.jpg"
              text="Latest technology for maximum efficiency"
              label="Web Development"
              path="/"
            />
            <CardItem
              src="images/advertising.jpg"
              text="Get Your advertisments in front of potential buyers"
              label="Advertising"
              path="/"
            />
          </ul>
        </div>
      </div>
      <a className="abtn" href="/">
        <button className="learnBtn" type="button">Learn More</button>
      </a>
    </div>
  );
}

export default Cards;
