import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {Drizzle, generateStore} from 'drizzle';
import {DrizzleContext} from 'drizzle-react';
import SimpleStorage from './truffle/build/contracts/SimpleStorage';

import 'bootstrap/dist/css/bootstrap.min.css';

const options = {contracts: [SimpleStorage]};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <App />
  </DrizzleContext.Provider>,
  document.getElementById('root')
);
