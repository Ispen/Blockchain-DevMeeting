import { Injectable } from '@nestjs/common';
const Web3 = require('web3')
const eth = require('eth')

@Injectable()
export class EthService {
    async sptint2_1(): Promise<string> {
        let ret: string;
        const web3 = new Web3('http://localhost:8545')
        // Dane w otrzymanym obiekcie są już przetworzone, nie musimy parsować heksów.
        const block = await web3.eth.getBlock('latest');
        let latest = block.number;
        for (let i=0; i<10; i++) {
            const { number, hash, transactions, timestamp } = await web3.eth.getBlock(latest--);
            ret += `
            Block number: ${number}<br>
            Block hash: ${hash}<br>
            Block date: ${new Date(timestamp * 1000)}<br>
            Number of transactions: ${transactions.length}<br>
            `;
        }
        return ret;
    } 
}
