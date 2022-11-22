const Web3 = require('Web3');
var web3 = new Web3('https://goerli.etherscan.io');

const button = document.getElementById('button');
button.addEventListener('click', () => {
    contract.methods
        .web3.eth.getBlockNumber()
        .then(console.log);
    });