import { Address } from "viem";

export const trimAddress = (address?: Address) => {
  if (!address || address.length < 10) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
