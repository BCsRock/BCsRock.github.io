//web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

//const Web3 = require("web3");

//let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/09d5929e069f4e8f9b4d4fe023495854"));

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

//Hardcoded entries after deployment of ECONOMY ecosystem

ECOAddress = '0xE5A1249a47840FF2ed7C1fD6988d187507A91C0c';
ECOETHAddress = '0xfa9A0ff2E443d38143B5C65EE511670051A395EF';
LOTAddress = '0x8dFd6143B6C2cdBF469a84c7Aa9416Fbb5aDb711';
StakingRewardFactoryAddress = '0xaA707AFDdf80B99b9Db9e771b996Da243D934570'

const ECOabi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
//ECO = web3.eth.contract(ECOabi);
//ECOInstance = ECO.at(ECOAddress);
ECOInstance = new web3.eth.Contract(ECOabi,ECOAddress);


console.log("ECOInstance.address = ", ECOInstance._address)

const ECOETHabi = JSON.parse('[{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
//ECOETH = web3.eth.contract(ECOETHabi);
ECOETHInstance = new web3.eth.Contract(ECOETHabi, ECOETHAddress);

const LOTabi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
//LOT = web3.eth.contract(LOTabi);
//LOTInstance = LOT.at(LOTAddress);
LOTInstance = new web3.eth.Contract(LOTabi,LOTAddress);

const SRFabi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"_stakingRewardsGenesis","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"stakingRewardsGenesis","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingRewardsInfoByStakingToken","outputs":[{"internalType":"address","name":"stakingRewards","type":"address"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"stakingToken","type":"address"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"deploy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"notifyRewardAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"stakingToken","type":"address"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true}]');
//SRF = web3.eth.contract(SRFabi);
//STFInstance = SRF.at(StakingRewardFactoryAddress);
STFInstance = new web3.eth.Contract(SRFabi,StakingRewardFactoryAddress);

const SRabi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"stakeWithPermit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
//SR = web3.eth.contract(SRabi);
//SRInstance contract instance later after loading Staking Token Factory details


//Dynamic Content based on deployed details

//get this from Staking reward factory
/*
stakingTokenAddress = web3.utils.toChecksumAddress(STFInstance.stakingTokens.call(0));
rewardTokenAddress = web3.utils.toChecksumAddress(STFInstance.rewardsToken.call());
stakingRewardsGenesis = STFInstance.stakingRewardsGenesis.call();
stakingRewardsGenesis = new Date(stakingRewardsGenesis.toNumber()*1000);


stakingRewardsInfoByStakingToken = STFInstance.stakingRewardsInfoByStakingToken.call(stakingTokenAddress);

SRAddress = web3.utils.toChecksumAddress(stakingRewardsInfoByStakingToken[0]);
SRInstance = SR.at(SRAddress);

SRlockedLPSupply = SRInstance.totalSupply.call();   //this is value in wei, not in ether

stakingEnd = SRInstance.periodFinish.call();
stakingEnd = new Date(stakingEnd.toNumber()*1000);

var ECOETHLPStakeIncrease = document.getElementById("ECOETHLPincrease").value;

//tmpval =getECOETHLOTearnings();

async function info() {
  await STFInstance.stakingTokens.call(0).then()
}

*/

function getTmpVal() {
    try {
        var x = tmpval;
        return x;
    } catch(err) {

    }
}

function getProposal() {
    try {
        var x = contractInstance.proposal.call();
        return x;
    } catch(err) {

    }
}

function getResult() {
    try {
        var x = contractInstance.getResult.call();
        return x;
    } catch(err) {

    } 
}

function getEndTime() {
    try {
        var x = contractInstance.endtime.call();  //this is unix time
        var myDate = new Date( x.c *1000);

        return myDate.toLocaleString();
    } catch(err) {

    }
}

function getEndTimeEpoch() {
    try {
        var x = contractInstance.endtime.call();  //this is unix time
        var myDate = x.c;

        return myDate;
    } catch(err) {

    }
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

  return address;

  //return web3.utils.toChecksumAddress(ethereum.request({ method: 'eth_accounts' }).then(function(accs){accs[0]}));
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

  balance = web3.fromWei(balance,'ether')
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
      console.log("An error happened when trying to get ECO balance. Error: ", error);
    });

  balance = web3.utils.fromWei(balance, 'ether');

  return balance;
}

async function getLOTETHBalance() {
    ether = web3.fromWei( LOTETHInstance.balanceOf(web3.eth.accounts[0]).toString(),'ether')
    return ether;
}

async function getECOETHLOTearnings() {
    ether = web3.fromWei( SRInstance.earned(web3.eth.accounts[0]).toString(),'ether')
    return ether;
}

async function getECOETHLPlocked() {
    ether = web3.fromWei( SRInstance.balanceOf(web3.eth.accounts[0]).toString(),'ether')
    return ether;
}

function getECOETHLOTROI() {
    
    return 25;
}

main() {

  getAddress().then(function(value) {
  document.getElementById("address").innerHTML = value;

  getBalance().then(function(value) {
  document.getElementById("balance").innerHTML = value;

  getECOBalance().then(function(value) {
  document.getElementById("ECOBalance").innerHTML = value;

  getLOTBalance().then(function(value) {
  document.getElementById("LOTBalance").innerHTML = value;

  getECOETHBalance().then(function(value) {
  document.getElementById("ECOETHBalance").innerHTML = value;

});

}


$(document).ready(async function() {

    $("#tmpval").html(await getECOBalance().then( (balance) => {balance} ) )

    $("#ECOBalance").html( await getECOBalance().then( (balance) => {balance} ) )

    /*

    $("#startTime").html(stakingRewardsGenesis)

    $("#endTime").html(stakingEnd);

    $("#ECOETHLPStake").click(async function() {

        var ECOETHLPStakeIncrease = document.getElementById("ECOETHLPincrease").value;
        ECOETHLPStakeIncrease = web3.toWei(String(ECOETHLPStakeIncrease),'ether');

        await SRInstance.stake(ECOETHLPStakeIncrease);
    });
    
    $("#LOTHarvest").click(async function() {
        await SRInstance.getReward();
    });

    $("#ECOETHWithdrawBTN").click(async function() {

        var amount = document.getElementById("ECOETHWithdraw").value;
        amount = web3.toWei(String(amount),'ether');

        await SRInstance.withdraw(amount);
    });
    
    $("#ECOETHExitBTN").click(async function() {
        await SRInstance.exit();
    });

    $("#address").html(getAddress);



    $("#LOTBalance").html(getLOTBalance);

    $("#ECOETHBalance").html(getECOETHBalance);

    $("#LOTETHBalance").html(getLOTETHBalance);

    $("#ECOETHLOTearnings").html(getECOETHLOTearnings);

    $("#ECOETHLPlocked").html(getECOETHLPlocked);

    $("#ECOETHLOTROI").html(getECOETHLOTROI);
    
    $("#yes").click(async function() {
        console.log("web3.eth.accounts[0]: ", web3.eth.accounts[1])
        console.log("web3.toCheckSumAddress(web3.eth.accounts[0]): ", web3.toChecksumAddress(web3.eth.accounts[1]))
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[0])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[1])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[2])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[3])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[4])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[5])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[6])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[7])});
        await contractInstance.submitBallot(true, {from: web3.toChecksumAddress(web3.eth.accounts[8])});

    });

    $("#no").click(function() {
        contractInstance.submitBallot(false, {from: web3.eth.accounts[0]});
    });

    */
})
