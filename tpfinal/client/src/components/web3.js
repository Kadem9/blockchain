import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/e674327d0fd64ad69fdb8cb2e8c7b7f2"
  );
  web3 = new Web3(provider);
}

export default web3;
