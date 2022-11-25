window.onload = function () {
    console.log("DApp is locked and loaded!");
  };
  
  let provider, signer, accounts;
  const myToken = "0x4e2327dd475401a78292f3681aacdac92502a9bf"; //ERC20 Contract Adress
  const transferAdress = "0x15433DA387451F9dE4565280C85506CB71aF9376";
  
  const handleAccountsChanged = (accounts) =>{
    console.log("Accounts changed");
  }
  
  if (window.ethereum) {
    this.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err) => {
        console.log(err);
      });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner(0);
  } else {
    console.log("Install digital Wallet!");
  }
  
  const enableEth = async () => {
    accounts = await window.ethereum.request({ method: "eth_requestAccounts" }).catch((err) => {
      console.log(err);
    });
    console.log(accounts);
  };
  
  const checkEthBalance = async () => {
    let balance = await window.ethereum
      .request({ method: "eth_getBalance", params: [accounts[0]] })
      .catch((err) => {
        console.log(err);
      });
  
    balance = parseInt(balance);
    balance = balance / Math.pow(10, 18);
    document.getElementById("ethbalance").value = balance.toString().substring(0, 7);
  }

  // Exercise 1
  const getBlockHeight = async () => {
    let blockHeight = await provider.getBlockNumber();
    document.getElementById("blockheight").value = blockHeight;
  };

  // Exercise 2
  const checkTokenBalance = async () => {
    let myTokenContract = new ethers.Contract(myToken, myTokenABI, provider);
    let balance = await myTokenContract.balanceOf(accounts[0]);
  
    document.getElementById("tokenbalance").value = balance.toString().substring(0, 5);
  };
  
  // Exericse 3
  const transferAmount = async () => {
    let myTokenContract = new ethers.Contract(myToken, myTokenABI, signer);
    let transfer = await myTokenContract.transfer(transferAdress, 10);
    console.log(transfer);
  }
  