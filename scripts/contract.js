import hre from "hardhat";

export const getContract = async (CONTRACT_ADDRESS) => {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counterContract = Counter.attach(CONTRACT_ADDRESS);
    return counterContract;
}