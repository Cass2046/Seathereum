import React, {Component} from 'react';
import Card from './Card';

// TODO
// in the future creatures will get pulled from the network will probably be
// done in market constructor

const creatures = [
  {
    name: 'Pinky',
    desc: 'squishy and sweet',
    id: 1
  },
  {
    name: 'Cephaloquad',
    desc: 'four legs are better than none',
    id: 2
  },
  {
    name: 'Squidward',
    desc: 'best friends with a sponge',
    id: 3
  },
  {
    name: 'Inky',
    desc: 'chases yellow hockey puck',
    id: 4
  }
];

class Market extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {creatures.map((creature, i) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
              <Card {...creature} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Market;
