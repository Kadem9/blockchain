// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

 

contract ValueStorage {
    uint256 private _value;

 

    constructor() {
        _value = 0;
    }

 

    function setValue(uint256 newValue) public {
        _value = newValue;
    }

 

    function getValue() public view returns (uint256) {
        return _value;
    }
}