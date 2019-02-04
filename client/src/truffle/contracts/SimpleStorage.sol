pragma solidity ^0.4.24;

contract SimpleStorage {
  string public data = "Hello World";

  function set(string x) public {
    data = x;
  }
}