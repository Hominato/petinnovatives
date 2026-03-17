// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title PetShopContract
 * @dev A smart contract for pet care donations and shop purchases with automatic impact fees.
 */
contract PetShopContract {
    address public owner;
    address public charityWallet;
    uint256 public constant IMPACT_FEE_PERCENT = 2;

    event DonationReceived(address indexed donor, uint256 amount, string cause);
    event PurchaseMade(address indexed buyer, uint256 amount, uint256 impactFee);

    constructor(address _charityWallet) {
        owner = msg.sender;
        charityWallet = _charityWallet;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    /**
     * @dev Donate to research or help strays. 2% is automatically routed to charity.
     */
    function donate(string memory _cause) public payable {
        require(msg.value > 0, "Donation amount must be greater than zero");
        
        uint256 impactFee = (msg.value * IMPACT_FEE_PERCENT) / 100;
        uint256 remainingAmount = msg.value - impactFee;

        // Route impact fee to charity
        (bool successFee, ) = charityWallet.call{value: impactFee}("");
        require(successFee, "Charity transfer failed");

        // Remaining stays in contract or could be routed to another research wallet
        // For simplicity, we emit an event and keep it here for research funding
        emit DonationReceived(msg.sender, remainingAmount, _cause);
    }

    /**
     * @dev Purchase items. 2% is automatically routed to charity.
     */
    function checkout() public payable {
        require(msg.value > 0, "Purchase amount must be greater than zero");

        uint256 impactFee = (msg.value * IMPACT_FEE_PERCENT) / 100;
        
        // Route impact fee to charity
        (bool successFee, ) = charityWallet.call{value: impactFee}("");
        require(successFee, "Impact fee transfer failed");

        emit PurchaseMade(msg.sender, msg.value, impactFee);
    }

    function updateCharityWallet(address _newCharityWallet) public onlyOwner {
        require(_newCharityWallet != address(0), "Invalid address");
        charityWallet = _newCharityWallet;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = owner.call{value: balance}("");
        require(success, "Withdraw failed");
    }
}
