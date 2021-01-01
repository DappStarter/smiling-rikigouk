require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note situate coin harvest derive tail stuff'; 
let testAccounts = [
"0xf9d5deb11e3f97768f15bb9a69c9e4894ea5d11944d4c900b50393bdf9581705",
"0xb7d1ab4ae717c8abbe744afcd1013dedc343f67bb57818241d1c99d7458c8184",
"0x2224eb674d21cb6df450e265f7f20e977e93d76518091c85e7e72b3755c09309",
"0x3881013fe741354f680f5aa8383dbe96285f28455b9f781eddd608bab977d25a",
"0xd3a23180cde58912aea03faa6ce4c48054a63d99145c0311a067f201e123c145",
"0xd593a8a3505ba227d9f44441cd8e09d8f4d296aaf0fe6d78e21e8ebd8d2feb81",
"0xe73614aa0e1b966b409b0413fdf7ee66b71395c72649cd558aad1721feb52fdc",
"0xaab79bdc4f0bf5192866096caa4412069558980195724ae1909751fbd0e2eaec",
"0x04089faf5669917d03f409714e478b6e8aa3c2a44915cd49c690b048e594bfc0",
"0x7997f5374f72dddd4a2a496b293621b39a7fb961c97a9cae67289de52a217451"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
