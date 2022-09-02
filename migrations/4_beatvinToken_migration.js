var beatvinToken = artifacts.require("beatvinTokenERC20");

module.exports = function(deployer) {
  deployer.deploy(beatvinToken);
};