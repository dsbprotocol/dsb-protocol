const TestnetUSDC = artifacts.require("TestnetUSDC");
module.exports = async function (deployer, network, accounts) {
    if( network == 'dev' ){
        await deployer.deploy(TestnetUSDC);
        console.log('TestnetUSDC', TestnetUSDC.address);
    }
};