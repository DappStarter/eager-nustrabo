require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone street deny soccer mixture gesture beach slot gasp'; 
let testAccounts = [
"0xcbfcea19e9d087811e49e598b1ae08a2b3fc93f29d0ecdb631992812b13c607c",
"0xe1ee3de43595497407569e53d37b11ab467b3621c1e17c13915913700d4e0697",
"0xf50beb5b2ed1c98e6e7a162d67f86b300125cc0665e2b919022ef19d83f5ea3a",
"0xfb5d663f2769b8851935af214bbccd4a6f1eedc0396666dd27807ff11e0cb2d6",
"0x30bcbfbbc86c60de16f68227bbd45745d875a06454019c2fd4873ff8c94583aa",
"0xecb0ea9ed311753be2cabe8febce7604b831a2350cf62e4feba2cc627125c4d8",
"0xb749698958e4486f2caa829590027b54f35d706991babba3b2d53df0e4a7dde4",
"0xc148c0168044c15b8a0070e78a08f8fc4858dd34aedfc5ffb57c25e8c9c9e579",
"0x02ce5b516b02c1e3d7b170d70015436dffa5f7377b0d6f3f64d5489012141c4d",
"0x91949c75525484b5b65a6eabcbb78d859ea6ddbf84b1bd4a0a3266c5035a991a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
