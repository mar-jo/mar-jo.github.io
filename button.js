const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

//const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

const button = document.getElementById('button');
button.addEventListener('click', () => {
    contract.methods
        .doSomething()
        .send({ from: '0x1234...' })
        .then(console.log);
    });