# crypto-addr-checker

## Goal:
To make a script that takes an address and makes a csv with as much metadata as possible.

# VIDEO
I made a video explaining what I have done.

[![Watch the video](https://img.youtube.com/vi/BGNE_J-Mj8I/0.jpg)](https://www.youtube.com/watch?v=BGNE_J-Mj8I)


# Cardano Address CSV & API Tool

The commits made in the video are up to commit `acbe5a14aa44e47e87a1228efb64fe0d434e233f`.  
Anything beyond that commit was done after the video.

---

## Final Version

After the video, I made some additional tweaks.

The script does two things:

- Generates a CSV containing: the address, ADA amount, and assets (NFTs or tokens)
- Provides an API endpoint to query the Cardano network locally via `localhost:3000/address/{address_id}`

## Technologies Used

- **JavaScript** (Node.js and Express)
- NPM library: [`csv-writer`](https://www.npmjs.com/package/csv-writer)
- [Blockfrost API](https://blockfrost.dev) to interact with the Cardano network

---

## How to Run It

### To just generate the CSV

1. Clone the repository
2. Install dependencies and run the script:
```
npm install
npm run csv
```
3. The CSV file will appear in the root folder of the repository.

Alternatively, you can ask me for access to run a GitHub Action that generates the CSV, which you can then download directly from GitHub.

### To run the Server
1. Clone the repository
2. Install dependencies and run the server:
```
npm install
npm serve
```
3. Open your browser and navigate to:
`http://localhost:3000/address/{address}`

Example:

http://localhost:3000/address/addr_test1wzs7xqd6y04p6nyeqjzt8gpuktw4x82p4ve9fmg5vut22ksl6el0e

Note: This works on the Cardano pre-production network, not the mainnet.

