import React, {Component} from 'react';

class Aquarium extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
  componentDidMount() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'orange';
    const {width, height} = canvas;
    ctx.fillRect(0, 0, width, height);
  }
  render() {
    return (
      <div className="mt-2 container">
        <div className="row justify-content-center">
          <canvas ref={this.canvas} />;
        </div>
      </div>
    );
  }
}

export default Aquarium;
