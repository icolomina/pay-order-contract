
# Payment Contracts

This repository contains two Solidity contracts designed to facilitate payment orders between creditors and debtors using ERC-20 tokens. The contracts allow creditors to create payment orders and enable debtors to pay those orders securely.

## Contracts Overview
### PayContractByOrder
This contract is deployed for each payment order. It allows a specific debtor to pay a specified amount to the creditor using an ERC-20 token.

#### Key Features
- State Management: The contract maintains the state of the payment order (PENDING, PAID, FUNDS_RECEIVED).
- Payment Functionality: Only the designated debtor can make payments.
- Confirmation of Payment: The creditor can confirm receipt of the payment.
  
#### Functions:
- **constructor**: Initializes the contract with the - debtor's address and the ERC-20 token address.
- **pay**: Allows the debtor to pay the specified amount to the creditor.
- **received**: Allows the creditor to confirm that the payment has been received.
- **getState**: Returns the current state of the payment order.
  
### PayContractByCreditor
This contract is deployed by the creditor and allows them to create multiple payment orders for different debtors.

#### Key Features
- Payment Order Creation: The creditor can create multiple payment orders with unique identifiers.
- State Management: Each payment order has its own state (PENDING, PAID, FUNDS_RECEIVED).
- Payment Functionality: Debtors can pay their respective orders.
- Confirmation of Payment: The creditor can confirm receipt of payments for each order.
  
#### Functions:
- **constructor**: Initializes the contract with the creditor's address.
- **createPaymentOrder**: Creates a new payment order.
- **pay**: Allows the debtor to pay the specified order.
- **received**: Allows the creditor to confirm receipt of the payment for the specified order.
- **getOrderState**: Returns the current state of a specific payment order.

## Usage

### Prerequisites

- **Ethereum Wallet**: The contract can be used in a dapp. It only requires a compatible wallet (e.g., MetaMask) to interact with the contract. 
- **ERC20 Token**: The contract utilizes an ERC20 token for payment transfers.

### Deployment
This project uses [Hardhat](https://hardhat.org/) as a development enviroment. To deploy de contract follow the next steps:

#### Install dependencies using npm: 

```shell
npm install
```

#### Compile the contracts

```shell
npx hardhat compile
```

#### Test the contracts

```shell
npx hardhat test
```

#### Use the deployment script

The deployment script uses one [ignition](https://hardhat.org/ignition/docs/guides/scripts) module to deploy first the token. Then the script gets the token address and deploys the order contract using it in the constructor and the debtor address. The creditor contract does not need any arguments, only to be signed by the creditor when deployed.

```shell
npx hardhat run scripts/deploy.ts
```