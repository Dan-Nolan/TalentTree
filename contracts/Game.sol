// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Game {
	address owner;

	mapping(address => mapping(string => bool)) public talents;
	mapping(address => uint) public points;

	constructor() {
	    owner = msg.sender;
	}

	function levelUp(address user) public {
		require(owner == msg.sender);
		points[user] += 1;
	}

  event TalentChosen(address indexed chooser, string indexed cidHash, string cid);

	function chooseTalent(string memory cid) public {
		require(points[msg.sender] > 0);
		talents[msg.sender][cid] = true;
		points[msg.sender]--;
    emit TalentChosen(msg.sender, cid, cid);
	}
}
