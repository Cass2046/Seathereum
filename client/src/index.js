import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// import drizzle functions and contract artifact
import { Drizzle, generateStore } from "drizzle";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Counters from "./components/counters";
import Test from "./contracts/Test.json";
import Market from "./components/market/Market";
import * as serviceWorker from "./serviceWorker";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [Test],
  web3: { 
      fallback: { 
          type: "ws", 
          url: "ws://127.0.0.1:9545",
        },
    },
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(
  // <App drizzle={drizzle} option={options} />, document.getElementById("root")
  <Market />, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
