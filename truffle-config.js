const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");

const rinkebyURL = ``;
const privateKey = "";

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, rinkebyURL),
      network_id: 4,
    },
  },
};
