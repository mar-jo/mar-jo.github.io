let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() { 
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    console.log("Connected to Metamask with Address: " + signer._address);
}