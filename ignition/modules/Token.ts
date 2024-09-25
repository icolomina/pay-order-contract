import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Token", (m) => {
  const token = m.contract("PayContractToken", ['My Token', 'MTY']);
  return { token };
});