// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContratMariage {
    address public conjoint1;
    address public conjoint2;
    bool public estMarie;

    constructor(address _conjoint1, address _conjoint2) {
        conjoint1 = _conjoint1;
        conjoint2 = _conjoint2;
        estMarie = false;
    }

    function marier() public {
        require(
            msg.sender == conjoint1 || msg.sender == conjoint2,
            "Seuls les conjoints peuvent appeler cette fonction."
        );
        require(!estMarie, "Le mariage a deja eu lieu.");

        estMarie = true;
    }

    function divorcer() public {
        require(
            msg.sender == conjoint1 || msg.sender == conjoint2,
            "Seuls les conjoints peuvent divorcer."
        );
        estMarie = false;
    }
}
