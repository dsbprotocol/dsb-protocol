// 0xA1c1D1Ac8E890765d2367725bc4D970D43c0b73a Root
// 0x7De613E2F46CcDD484066BF0636B90DC4889d2af Implementation
// 0x147236a023Cf21ceaC1d394EA468178D308E2bE9 Deployer1
// 0xBD4e00cC9e928b466BC86578a8Bcd8947987757e Deployer2
// 0xC96980254c8F80815B03319Dd3FD9b4d85C80d78 Deployer3
const Root = artifacts.require("Root");
const Deployer2 = artifacts.require("Deployer3");
module.exports = async function() {
    const root = await Root.deployed();
    const rootAsD2 = await Deployer2.at(root.address);
    try{
        const r = await rootAsD2.pair();
        console.log("r", r);
    }catch(e){
        console.log(e);
    }
    process.exit(0);
};
