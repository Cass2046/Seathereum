import "./Card.css";

import React, { Component } from "react";

import inkfish from "../../inkfish.png";

import Purchasing from "./Purchasing";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//npm i @material-ui/core --save
//npm install react-router-dom

class Card extends Component {
  //state = { name: this.props.name, desc: this.props.desc };
  state = { id: this.props.key };
  handleBuy = () => {
    console.log("Buy", this.state.id);
  };
  renderPurchase() {
    return <div />;
  }
  render() {
    return (
      <div className="card text-center border-0 bg-light">
        <div className="front">
          <img className="card-img-top w-auto" src={inkfish} alt="" />
        </div>
        <div className="back card-body w-100 position-absolute">
          <h4 className="card-title">{this.state.name}</h4>
          <p className="card-text">{this.state.desc}</p>
        </div>
        <div>
          <Purchasing
            name={this.state.name}
            birthTime={this.props.birthTime}
            generation={this.props.generation}
            price={this.props.price}
          />
          <Button
            Component={Link}
            to="/open-collective"
            position="right-bottom"
            href="#"
            onClick={this.handleBuy}
            className="btn btn-lg btn-primary"
          >
            Buy
          </Button>
        </div>
      </div>
    );
  }
}

export default Card;

{
  /* const Card = props => {
   const {name, desc} = props;
   test = () => {
     console.log('buy');
   };
   return (
       <div className = 'card text-center border-0 bg-light'>
       <div className = 'front'>
       <img className = 'card-img-top w-auto' src = {inkfish} alt = '' />
       </div>
       <div className="back card-body w-100 position-absolute">
         <h4 className="card-title">{name}</h4>
       <p className = 'card-text'>{desc}<
           /p>
         <button href="#" onClick={this.test} className="btn btn-lg
 btn-primary"> Buy
         </button>
       </div>
     </div>);
 }; */
}
