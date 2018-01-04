pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract LocCoin is MintableToken {
  string public name = "LOC COIN";
  string public symbol = "LOC";
  uint256 public decimals = 18;
}
