const Root = artifacts.require("Root");
const Implementation = artifacts.require("Implementation");
module.exports = async function() {
    const root = await Root.deployed();
    console.log('root', root.address);
    const dao = await Implementation.at(root.address);
    console.log('dao', dao.address);
    try{
        console.log('advance...');
        const r = await dao.advance();
        console.log("r", r);
    }catch(e){
        console.log(e);
    }
    process.exit(0);
};
