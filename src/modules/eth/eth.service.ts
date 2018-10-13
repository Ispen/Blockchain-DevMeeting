import { Injectable } from '@nestjs/common';
const Web3 = require('web3');

@Injectable()
export class EthService {
    private readonly web3 = new Web3('http://localhost:8545')
    constructor ( ) {}
    async sprint2_1(): Promise<string> {
        let ret: string;
        const block = await this.web3.eth.getBlock('latest');
        let latest = block.number;
        for (let i=0; i<10; i++) {
            const { number, hash, transactions, timestamp } = await this.web3.eth.getBlock(latest--);
            ret += `
            Block number: ${number}<br>
            Block hash: ${hash}<br>
            Block date: ${new Date(timestamp * 1000)}<br>
            Number of transactions: ${transactions.length}<br>
            `;
        }
        return ret;
    }
    async sprint2_2(): Promise<string> {
        let ret: string;
        const block = await this.web3.eth.getBlock('latest');
        const { transactions } = block;
        transactions.forEach(async element => {
            const transaction = await this.web3.eth.getTransaction(element)
            //nadawcę, adresata, wartość, gas, gasPrice (wyjaśnienie później) i dane
            ret += `
            Transaction owner: ${transaction.from}<br>
            Recipient: ${transaction.to}<br>
            Value: ${transaction.value}<br>
            Number of transactions: ${transactions.length}<br>
            `;
        });
        return ret;
    } 
}
