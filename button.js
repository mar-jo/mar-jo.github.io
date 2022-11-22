//const Web3 = require('Web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://mar-jo.github.io"));

//var web3 = new Web3('https://goerli.etherscan.io');


const button = document.getElementById('button');
button.addEventListener('click', () => {
    contract.methods
        .web3.eth.getBlockNumber()
        .then(console.log);
    });