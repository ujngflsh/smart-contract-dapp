import { ethers } from "ethers";
import { provider } from "./provider";

export const CONTRACT_ADDRESS =
  "0x261AFD7aA16b71e84CA439FeD8029120C199E66e";

export const ABI = [
  "function getMessage() view returns (string)",
];

export const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  ABI,
  provider
);
