// import drizzle functions and contract artifact
import { Drizzle } from "drizzle";
import Test from "./contracts/Test.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [Test],
  web3: { fallback: { type: "ws", url: "ws://127.0.0.1:9545" } }
};

// setup drizzle
const drizzle = new Drizzle(options);
