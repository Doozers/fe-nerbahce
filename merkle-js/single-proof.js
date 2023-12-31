import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

// scenario 1
const values = [
  ["0x1111111111111111111111111111111111111111", "1"],
  ["0x2222222222222222222222222222222222222222", "2"],
  ["0x3222222222222222222222222222222222222222", "3"],
  ["0x4222222222222222222222222222222222222222", "4"],
  ["0x5222222222222222222222222222222222222222", "5"],
  ["0x6222222222222222222222222222222222222222", "6"],
  ["0x11ed089a9715aDB1e294A73f4e8C40A7a455b6d3", "7"],
  ["0x8222222222222222222222222222222222222222", "8"],
  ["0x9222222222222222222222222222222222222222", "9"],
  ["0x0222222222222222222222222222222222222222", "0"]
];

const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

for (const [i, v] of tree.entries()) {
  if (v[0] === '0x11ed089a9715aDB1e294A73f4e8C40A7a455b6d3') {
    console.log('Value:', v);
    console.log('Proofs:', tree.getProof(i));
  }
}

console.log('Merkle Root:', tree.root);

fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));
