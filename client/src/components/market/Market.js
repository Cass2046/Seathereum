import React, { Component } from "react";
import Card from "./Card";
import wave from "../../wave.png";
//import { SketchPicker } from 'react-color';
//npm install react-color --save

// TODO
// in the future creatures will get pulled from the network will probably be
// done in market constructor

const creatures = [
  {
    name: "Pinky",
    generation: 0,
    birthTime: "4-11-2019",
    forSale: true,
    desc: "A",
    price: 100,
    id: 1
  },
  {
    name: "Cephaloquad",
    generation: 3,
    birthTime: "4-9-2019",
    forSale: true,
    desc: "B",
    price: 120,
    id: 2
  },
  {
    name: "Squidward",
    generation: 6,
    birthTime: "4-10-2019",
    forSale: true,
    desc: "C",
    price: 130,
    id: 3
  },
  {
    name: "Inky",
    generation: 10,
    birthTime: "4-13-2019",
    forSale: true,
    desc: "D",
    price: 140,
    id: 4
  }
];

const text = {
  color: "#11426a"
};

const headerbg = {
  backgroundColor: "#1dc5da"
};

const footer1 = {
  backgroundColor: "#64b5f6"
};

const footer2 = {
  backgroundColor: "#2196f3"
};

const footer3 = {
  backgroundColor: "#1976d2"
};

class Market extends Component {
  state = { dataKey: null, id: null };
  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log("drizzle", drizzle);
    console.log("drizzleState", drizzleState);
    const contract = drizzle.contracts.AquariumGarden;
    console.log("contract", contract);
    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["getSeabiesByOwner"].cacheCall();
    //const dataKey = contract.methods["getSeabyById"].cacheCall(0);

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }
  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };
  handleSetId = values => {
    let id = [];
    for (let i = 0; i < values.length; i++) {
      id.push(values[i]);
    }
    this.setState({ id });
  };

  render() {
    // get the contract state from drizzleState
    const { AquariumGarden } = this.props.drizzleState.contracts;
    // using the saved `dataKey`, get the variable   we're interested in
    const getSeabiesByOwner =
      AquariumGarden.getSeabiesByOwner[this.state.dataKey];
    // console.log("getSeabiesByOwner", getSeabiesByOwner);
    let values = [];
    if (getSeabiesByOwner) {
      for (let i = 0; i < getSeabiesByOwner.value.length; i++) {
        console.log("value", i, getSeabiesByOwner.value[i]);
      }
      console.log("value", getSeabiesByOwner.value);
      values = getSeabiesByOwner.value;
    }
    console.log("values", values);
    // const getSeabyById = AquariumGarden.getSeabyById[this.state.dataKey];
    // console.log("getSeabyById", getSeabyById);
    return (
      <div className="container" style={text}>
        <div className="Header" style={headerbg}>
          <img className="wave" src={wave} style={StyleSheet.img} />
          <text>Take Sea Creatures back home!</text>
        </div>
        <div className="row">
          {values.map(id => (
            <div className="card" key={id}>
              <Card
                key={id}
                drizzle={this.props.drizzle}
                drizzleState={this.props.drizzleState}
              />
            </div>
          ))}
        </div>

        <div className="footer" style={footer1}>
          <text>© 2019 All rights reserved</text>
        </div>
        <div className="footer" style={footer2}>
          <text>© 2019 All rights reserved</text>
        </div>
        <div className="footer" style={footer3}>
          <text>© 2019 All rights reserved</text>
        </div>
      </div>
    );
  }
}

export default Market;
