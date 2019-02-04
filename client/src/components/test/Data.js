import React, {Component} from 'react';
import {DrizzleContext} from 'drizzle-react';

export default () => (
  <DrizzleContext.Consumer>
    {({drizzle, drizzleState, initialized}) => {
      return initialized ? <Data {...{drizzle, drizzleState}} /> : 'Loading...';
    }}
  </DrizzleContext.Consumer>
);

class Data extends Component {
  state = {key: null};

  componentDidMount() {
    const {drizzle} = this.props;
    const contract = drizzle.contracts.SimpleStorage;
    const key = contract.methods.data.cacheCall();
    this.setState({key});
  }

  render() {
    const {SimpleStorage} = this.props.drizzleState.contracts;
    const data = SimpleStorage.data[this.state.key];
    return <p>{data && data.value}</p>;
  }
}
