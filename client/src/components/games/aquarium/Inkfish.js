import React, {Component} from 'react';
import inkfish from '../../../inkfish.png';

class Inkfish extends Component {
  constructor(props) {
    super(props);
    const {x = 0, y = 0} = props;
    this.state = {
      frame: null,
      x,
      y
    };
    this.img = React.createRef();
  }
  update = (frame) => {
    this.setState(({x, y}) => ({
      frame,
      x: x + frame,
      y
    }));
    requestAnimationFrame(this.update);
  };
  componentDidMount() {
    requestAnimationFrame(this.update);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
  }
  render() {
    return <img src={inkfish} ref={this.img} alt="inkfish" />;
  }
}

export default Inkfish;
