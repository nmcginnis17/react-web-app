import React from 'react';
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return(
    <div className="cards">
      <h1>Check out what we do!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Architecture that will surprise you"
              label="Technology"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="State of the art Engeineering"
              label="Technology"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Designs for the future"
              label="Style"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Latest technology for maximum efficiency"
              label="Technology"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Support and Communication throughout the entire process"
              label="Service"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
