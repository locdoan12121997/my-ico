const LocCoinCrowdsale = artifacts.require("./LocCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // one second in the future
  const endTime = startTime + 900 //(86400 * 20) // 20 days
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]

  deployer.deploy(LocCoinCrowdsale, startTime, endTime, rate, wallet)
};
  