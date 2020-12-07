//web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

//const Web3 = require("web3");

//let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/09d5929e069f4e8f9b4d4fe023495854"));
let chain = 'ropsten';

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  ethereum.request({ method: 'eth_requestAccounts' });
});

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

// Normally, we would recommend the 'eth_chainId' RPC method, but it currently
// returns incorrectly formatted chain ID values.
let currentChainId = ethereum.chainId;

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    // Do any other work!
  }
}

ethereum.request({ method: 'eth_accounts' }).then(function(accs){ console.log("Curr acc eth req=", accs[0]); });

//Hardcoded entries after deployment of CryptoPoly ecosystem

ECOAddress = '0xE5A1249a47840FF2ed7C1fD6988d187507A91C0c';
ECOETHAddress = '0xfa9A0ff2E443d38143B5C65EE511670051A395EF';
SUSDETHAddress = '0x1006400E1272a07EDde5a11F71C4116fe655Dd34';
USDCETHAddress = '0xbc30AaA8e99d0f0e435FC938034850c2fC77f753';
LOTAddress = '0x8dFd6143B6C2cdBF469a84c7Aa9416Fbb5aDb711';
LOTETHAddress = '0x6a3eb0bd87d61675d30483cfaad96c36a3ab04ec';

StakingRewardFactoryAddress = '0xB8780cA897932724b0182e21E63c2221fE5FB7cF'

const ECOabi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
ECOInstance = new web3.eth.Contract(ECOabi,ECOAddress);

console.log("ECOInstance.address = ", ECOInstance._address)

const ECOETHabi = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
ECOETHInstance = new web3.eth.Contract(ECOETHabi, ECOETHAddress);

LOTETHInstance = new web3.eth.Contract(ECOETHabi, LOTETHAddress);

SUSDETHInstance = new web3.eth.Contract(ECOETHabi,SUSDETHAddress);

USDCETHInstance = new web3.eth.Contract(ECOETHabi,USDCETHAddress);


const LOTabi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
LOTInstance = new web3.eth.Contract(LOTabi,LOTAddress);

const SRFabi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"_stakingRewardsGenesis","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"stakingRewardsGenesis","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingRewardsInfoByStakingToken","outputs":[{"internalType":"address","name":"stakingRewards","type":"address"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"stakingToken","type":"address"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"deploy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"notifyRewardAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"stakingToken","type":"address"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true}]');
STFInstance = new web3.eth.Contract(SRFabi,StakingRewardFactoryAddress);

const SRabi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"stakeWithPermit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

let SRAddress;  //Staking Reward Contract Address of ETH/ECO LP Staking
let SRInstance;

let SRSEAddress; //Staking Reward Contract Address of ETH/sUSD LP Staking
let SRSEInstance;

let SRUEAddress;  //Staking Reward Contract Address of ETH/USDC LP Staking
let SRUEInstance;

let SRLEAddress;  //Staking Reward Contract Address of LOT/USDC LP Staking
let SRLEInstance;

async function initStakingRewardContracts() {

  //get Staking Reward Contract of ETH/ECO
  await STFInstance.methods.stakingRewardsInfoByStakingToken(ECOETHAddress).call().then(
    function(value){
      SRAddress = value[0];
    }, 
    function(error){
      console.log("An error occurred when trying to get stakingRewardsInfoByStakingToken. Error: ", error);
  });

  SRInstance = new web3.eth.Contract(SRabi, SRAddress);

  //get Staking Reward Contract of ETH/sUSD
  await STFInstance.methods.stakingRewardsInfoByStakingToken(SUSDETHAddress).call().then(
    function(value){
      SRSEAddress = value[0];
    }, 
    function(error){
      console.log("An error occurred when trying to get stakingRewardsInfoByStakingToken. Error: ", error);
  });

  SRSEInstance = new web3.eth.Contract(SRabi, SRSEAddress);

  //get Staking Reward Contract of ETH/USDC
  await STFInstance.methods.stakingRewardsInfoByStakingToken(USDCETHAddress).call().then(
    function(value){
      SRUEAddress = value[0];
    }, 
    function(error){
      console.log("An error occurred when trying to get stakingRewardsInfoByStakingToken. Error: ", error);
  });

  SRUEInstance = new web3.eth.Contract(SRabi, SRUEAddress);

    //get Staking Reward Contract of ETH/LOT
  await STFInstance.methods.stakingRewardsInfoByStakingToken(LOTETHAddress).call().then(
    function(value){
      SRLEAddress = value[0];
    }, 
    function(error){
      console.log("An error occurred when trying to get stakingRewardsInfoByStakingToken. Error: ", error);
  });

  SRLEInstance = new web3.eth.Contract(SRabi, SRLEAddress);

}

initStakingRewardContracts();

async function getStakingGenesis() {
  let start = 0;
  await STFInstance.methods.stakingRewardsGenesis().call().then(
  function(value){
      start = value;
    }, 
    function(error){
      console.log("An error occurred when trying to get staking rewards genesis. Error: ", error);
    });

  start = new Number(start);
  start = new Date(start.valueOf()*1000);

  return start.toLocaleString();

}

async function getPhaseIStart() {
  let genesis = await getStakingGenesis();
  return genesis;
}

async function getPhaseIEnd() {
  
  let genesis = await getStakingGenesis();
  let end = 0;
  await SRInstance.methods.periodFinish.call().call().then(
    function(value){
      end = value;
    }, 
    function(error){
      console.log("An error occurred when trying to get Phase I ECOETH end time. Error: ", error);
    });

  end = new Number(end);
  end = new Date(end.valueOf()*1000);

  if (end < genesis )
    end = "Staking has not started";

  return end.toLocaleString();

}

async function getPhaseIIStart() {
  let gensis = await getStakingGenesis();
  return genesis;
}

async function getPhaseIIEnd() {
  let genesis = await getStakingGenesis();
  let end = 0;
  await SRLEInstance.methods.periodFinish.call().call().then(
    function(value){
      end = value;
    }, 
    function(error){
      console.log("An error occurred when trying to get Phase I ECOETH end time. Error: ", error);
    });

  end = new Number(end);
  end = new Date(end.valueOf()*1000);

  if (end < genesis )
    end = "Staking has not started";

  return end.toLocaleString();

}

async function getAddress() {
  address = '0x0';

  await ethereum.request({ method: 'eth_accounts' }).then(
    function(value){
      console.log("Address found to be: ", value[0]);
      address = value[0];
    }, 
    function(error){
      console.log("An error occurred when trying to get Ethereum address. Error: ", error);
    });

  address = web3.utils.toChecksumAddress(address);
  
  return address;

}

async function getBalance() {

  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await web3.eth.getBalance(address).then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get Ethereum balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance,'ether')
  return balance;
}

async function getECOBalance() {
  
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await ECOInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ECO balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;

}

async function getLOTBalance() {
  
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await LOTInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get LOT balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;

}

async function getLOTTotalRewards() {
  
  let balance = 0;

  await LOTInstance.methods.balanceOf(StakingRewardFactoryAddress).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get total LOT rewards. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;

}

async function getECOETHBalance() {
  
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await ECOETHInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ETH/ECO balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getLOTETHBalance() {
  
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await LOTETHInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ETH/LOT balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getSUSDETHBalance() {
  
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SUSDETHInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ETH/sUSD balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getUSDCETHBalance() {
  
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await USDCETHInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ETH/USDC balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getECOETHLOTearnings() {
  let earnings = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRInstance.methods.earned(address).call().then(
    function(value) {
      earnings = value;
    },
    function(error) {
      console.log("An error happened when trying to get ECO/ETH earnings. Error: ", error);
    });

  earnings = web3.utils.fromWei(earnings, 'ether');

  return earnings;
}

async function getLOTETHLOTearnings() {
  let earnings = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRLEInstance.methods.earned(address).call().then(
    function(value) {
      earnings = value;
    },
    function(error) {
      console.log("An error happened when trying to get ECO/ETH earnings. Error: ", error);
    });

  earnings = web3.utils.fromWei(earnings, 'ether');

  return earnings;
}

async function getSUSDETHLOTearnings() {
  let earnings = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRSEInstance.methods.earned(address).call().then(
    function(value) {
      earnings = value;
    },
    function(error) {
      console.log("An error happened when trying to get sUSD/ETH earnings. Error: ", error);
    });

  earnings = web3.utils.fromWei(earnings, 'ether');

  return earnings;
}

async function getUSDCETHLOTearnings() {
  let earnings = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRUEInstance.methods.earned(address).call().then(
    function(value) {
      earnings = value;
    },
    function(error) {
      console.log("An error happened when trying to get USDC/ETH earnings. Error: ", error);
    });

  earnings = web3.utils.fromWei(earnings, 'ether');

  return earnings;
}

async function getECOETHLPlocked() {
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ECO/ETH locked balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getLOTETHLPlocked() {
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRLEInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get ECO/ETH locked balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getSUSDETHLPlocked() {
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRSEInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get sUSD/ETH locked balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getUSDCETHLPlocked() {
  let balance = 0;
  let address = '0x0'

  await getAddress().then(
    (addr) => { address = addr;},
    (err) => {console.log("Could not fetch Ethereum address. Error: ", err)}
  );

  await SRUEInstance.methods.balanceOf(address).call().then(
    function(value) {
      balance = value;
    },
    function(error) {
      console.log("An error happened when trying to get USDC/ETH locked balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function main() {

  await getAddress().then(function(value) {
    document.getElementById("address").innerHTML = value;
  });

  await getBalance().then(function(value) {
    document.getElementById("balance").innerHTML = value;
  });

  await getECOBalance().then(function(value) {
    document.getElementById("ECOBalance").innerHTML = value;
  });

  await getLOTBalance().then(function(value) {
    document.getElementById("LOTBalance").innerHTML = value;
  });

  await getECOETHBalance().then(function(value) {
    document.getElementById("ECOETHBalance").innerHTML = value;
  });

  await getLOTETHBalance().then(function(value) {
    document.getElementById("LOTETHBalance").innerHTML = value;
  });

  await getSUSDETHBalance().then(function(value) {
    document.getElementById("SUSDETHBalance").innerHTML = value;
  });

  await getUSDCETHBalance().then(function(value) {
    document.getElementById("USDCETHBalance").innerHTML = value;
  });

  await getLOTTotalRewards().then(function(value) {
    document.getElementById("totalLotReward").innerHTML = value;
  })

}

async function PhaseI() {

  await getPhaseIStart().then(function(value) {
    document.getElementById("startTime").innerHTML = value;
  });

  await getPhaseIEnd().then(function(value) {
    document.getElementById("endTime").innerHTML = value;
  });

  updateDisplayPhaseI()

}

async function PhaseII() {

  await getPhaseIIStart().then(function(value) {
    document.getElementById("startTimePII").innerHTML = value;
  });

  await getPhaseIIEnd().then(function(value) {
    document.getElementById("endTimePII").innerHTML = value;
  });

  updateDisplayPhaseII()

}




main()

PhaseI()


async function approveEE() {

  var amount = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  data = await ECOETHInstance.methods.approve(SRAddress, amount).encodeABI();

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
    gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
    to: ECOETHAddress, // Required except during contract publications.
    from: currentAccount, // must match user's active address.
    value: '0x00', // Staking sends LP tokens, not Ether value. 
    data, // Function signature and parameters
    chain
  }

  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
    }).then( function(hash) {
      console.log("Approve transaction issued with hash: ", hash);
    }, function(error) {
      console.log("An error happened when trying to aprove ECO/ETH LP. Error: ", error);
  });

}

async function stakeEE() {

  var amount = document.getElementById("ECOETHLPincrease").value;
  var balance = await getECOETHBalance();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRInstance.methods.stake(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Stake transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to stake ECO/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid ECO/ETH LP balance for staking.");
  }

  updateDisplayPhaseI()


}

async function harvestEE(){

  var expected = 0;

  await getECOETHLOTearnings().then(function(value) {
    expected = value;
  });

  if (Number(expected) > 0) {

    data = await SRInstance.methods.getReward().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("getReward transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to get reward for ECO/ETH LP staking. Error: ", error);
    });
  } else {
    console.log("Found no rewards to collect.")
    return 0;
  }

  updateDisplayPhaseI();

}

async function withdrawEE() {

  var amount = document.getElementById("ECOETHWithdraw").value;
  var balance = await getECOETHLPlocked();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRInstance.methods.withdraw(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Withdraw transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to withdraw ECO/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid withdrawal amount of ECO/ETH LP token.");
  }

  updateDisplayPhaseI()
}

async function exitEE() {

  var lockedAmount = 0;
  await getECOETHLPlocked().then( (value) => { lockedAmount = value});

  var expectedReward = 0;
  await getECOETHLOTearnings().then( (value) => { expectedReward = value});

  if (Number(lockedAmount) > 0 || Number(expectedReward) > 0 ) {

    data = await SRInstance.methods.exit().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Exit transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to Exit ECO/ETH LP staking. Error: ", error);
    });

  } else {
    console.log("Nothing to withdraw or get as reward.");
  }

  updateDisplayPhaseI()
}

async function approveLE() {

  var amount = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  data = await LOTETHInstance.methods.approve(SRLEAddress, amount).encodeABI();

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
    gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
    to: LOTETHAddress, // Required except during contract publications.
    from: currentAccount, // must match user's active address.
    value: '0x00', // Staking sends LP tokens, not Ether value. 
    data, // Function signature and parameters
    chain
  }

  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
    }).then( function(hash) {
      console.log("Approve transaction issued with hash: ", hash);
    }, function(error) {
      console.log("An error happened when trying to aprove LOT/ETH LP. Error: ", error);
  });

}

async function stakeLE() {

  var amount = document.getElementById("LOTETHLPincrease").value;
  var balance = await getLOTETHBalance();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRLEInstance.methods.stake(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRLEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Stake transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to stake LOT/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid LOT/ETH LP balance for staking.");
  }

  updateDisplayPhaseII()


}

async function harvestLE(){

  var expected = 0;

  await getLOTETHLOTearnings().then(function(value) {
    expected = value;
  });

  if (Number(expected) > 0) {

    data = await SRLEInstance.methods.getReward().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRLEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("getReward transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to get reward for LOT/ETH LP staking. Error: ", error);
    });
  } else {
    console.log("Found no rewards to collect.")
    return 0;
  }

  updateDisplayPhaseII();

}

async function withdrawLE() {

  var amount = document.getElementById("LOTETHWithdraw").value;
  var balance = await getLOTETHLPlocked();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRLEInstance.methods.withdraw(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRLEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Withdraw transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to withdraw LOT/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid withdrawal amount of LOT/ETH LP token.");
  }

  updateDisplayPhaseII()
}

async function exitLE() {

  var lockedAmount = 0;
  await getLOTETHLPlocked().then( (value) => { lockedAmount = value});

  var expectedReward = 0;
  await getLOTETHLOTearnings().then( (value) => { expectedReward = value});

  if (Number(lockedAmount) > 0 || Number(expectedReward) > 0 ) {

    data = await SRLEInstance.methods.exit().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRLEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Exit transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to Exit LOT/ETH LP staking. Error: ", error);
    });

  } else {
    console.log("Nothing to withdraw or get as reward.");
  }

  updateDisplayPhaseII()
}

async function approveSE() {

  var amount = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  data = await SUSDETHInstance.methods.approve(SRSEAddress, amount).encodeABI();

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
    gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
    to: SUSDETHAddress, // Required except during contract publications.
    from: currentAccount, // must match user's active address.
    value: '0x00', // Staking sends LP tokens, not Ether value. 
    data, // Function signature and parameters
    chain
  }

  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
    }).then( function(hash) {
      console.log("Approve transaction issued with hash: ", hash);
    }, function(error) {
      console.log("An error happened when trying to approve sUSD/ETH LP. Error: ", error);
  });

}

async function stakeSE() {

  var amount = document.getElementById("SUSDETHLPincrease").value;
  var balance = await getSUSDETHBalance();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRSEInstance.methods.stake(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRSEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Stake transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to stake sUSD/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid sUSD/ETH LP balance for staking.");
  }

  updateDisplayPhaseI()


}

async function harvestSE(){

  var expected = 0;

  await getSUSDETHLOTearnings().then(function(value) {
    expected = value;
  });

  if (Number(expected) > 0) {

    data = await SRSEInstance.methods.getReward().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRSEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("getReward transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to get reward for sUSD/ETH LP staking. Error: ", error);
    });
  } else {
    console.log("Found no rewards to collect.")
    return 0;
  }

  updateDisplayPhaseI();

}

async function withdrawSE() {

  var amount = document.getElementById("SUSDETHWithdraw").value;
  var balance = await getSUSDETHLPlocked();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRSEInstance.methods.withdraw(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRSEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Withdraw transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to withdraw sUSD/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid withdrawal amount of sUSD/ETH LP token.");
  }

  updateDisplayPhaseI()
}

async function exitSE() {

  var lockedAmount = 0;
  await getSUSDETHLPlocked().then( (value) => { lockedAmount = value});

  var expectedReward = 0;
  await getSUSDETHLOTearnings().then( (value) => { expectedReward = value});

  if (Number(lockedAmount) > 0 || Number(expectedReward) > 0 ) {

    data = await SRSEInstance.methods.exit().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRSEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Exit transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to Exit sUSD/ETH LP staking. Error: ", error);
    });

  } else {
    console.log("Nothing to withdraw or get as reward.");
  }

  updateDisplayPhaseI()
}

async function approveUE() {

  var amount = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  data = await USDCETHInstance.methods.approve(SRUEAddress, amount).encodeABI();

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
    gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
    to: USDCETHAddress, // Required except during contract publications.
    from: currentAccount, // must match user's active address.
    value: '0x00', // Staking sends LP tokens, not Ether value. 
    data, // Function signature and parameters
    chain
  }

  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
    }).then( function(hash) {
      console.log("Approve transaction issued with hash: ", hash);
    }, function(error) {
      console.log("An error happened when trying to approve USDC/ETH LP. Error: ", error);
  });

}

async function stakeUE() {

  var amount = document.getElementById("USDCETHLPincrease").value;
  var balance = await getUSDCETHBalance();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRUEInstance.methods.stake(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRUEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Stake transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to stake USDC/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid USDC/ETH LP balance for staking.");
  }

  updateDisplayPhaseI()


}

async function harvestUE(){

  var expected = 0;

  await getUSDCETHLOTearnings().then(function(value) {
    expected = value;
  });

  if (Number(expected) > 0) {

    data = await SRUEInstance.methods.getReward().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRUEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("getReward transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to get reward for USDC/ETH LP staking. Error: ", error);
    });
  } else {
    console.log("Found no rewards to collect.")
    return 0;
  }

  updateDisplayPhaseI();

}

async function withdrawUE() {

  var amount = document.getElementById("USDCETHWithdraw").value;
  var balance = await getUSDCETHLPlocked();

  if (Number(amount) > 0 && Number(amount) <= Number(balance)) {

    amount = web3.utils.toWei(amount, 'ether');

    data = await SRUEInstance.methods.withdraw(amount).encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRUEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Withdraw transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to withdraw USDC/ETH LP. Error: ", error);
    });

  } else {
    console.log("Invalid withdrawal amount of ECO/ETH LP token.");
  }

  updateDisplayPhaseI()
}

async function exitUE() {

  var lockedAmount = 0;
  await getUSDCETHLPlocked().then( (value) => { lockedAmount = value});

  var expectedReward = 0;
  await getUSDCETHLOTearnings().then( (value) => { expectedReward = value});

  if (Number(lockedAmount) > 0 || Number(expectedReward) > 0 ) {

    data = await SRUEInstance.methods.exit().encodeABI();

    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0xEE6B2800', // customizable by user during MetaMask confirmation. 4 gwei in hex = 0xEE6B2800
      gas: '0x33450', // customizable by user during MetaMask confirmation. 210000 in hex = 0x33450
      to: SRUEAddress, // Required except during contract publications.
      from: currentAccount, // must match user's active address.
      value: '0x00', // Staking sends LP tokens, not Ether value. 
      data, // Function signature and parameters
      chain
    }

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
      }).then( function(hash) {
        console.log("Exit transaction issued with hash: ", hash);
      }, function(error) {
        console.log("An error happened when trying to Exit USDC/ETH LP staking. Error: ", error);
    });

  } else {
    console.log("Nothing to withdraw or get as reward.");
  }

  updateDisplayPhaseI()
}


async function updateDisplayPhaseI() {

  await getECOETHLOTearnings().then(function(value) {
    document.getElementById("ECOETHLOTearnings").innerHTML = value;
  });  

  await getECOETHLPlocked().then(function(value) {
    document.getElementById("ECOETHLPlocked").innerHTML = value;
  });

  await getSUSDETHLOTearnings().then(function(value) {
    document.getElementById("SUSDETHLOTearnings").innerHTML = value;
  });  

  await getSUSDETHLPlocked().then(function(value) {
    document.getElementById("SUSDETHLPlocked").innerHTML = value;
  });

  await getUSDCETHLOTearnings().then(function(value) {
    document.getElementById("USDCETHLOTearnings").innerHTML = value;
  });  

  await getUSDCETHLPlocked().then(function(value) {
    document.getElementById("USDCETHLPlocked").innerHTML = value;
  });

  main();

}

async function updateDisplayPhaseII() {

  await getLOTETHLOTearnings().then(function(value) {
    document.getElementById("LOTETHLOTearnings").innerHTML = value;
  });  

  await getLOTETHLPlocked().then(function(value) {
    document.getElementById("LOTETHLPlocked").innerHTML = value;
  });

  main();

}
