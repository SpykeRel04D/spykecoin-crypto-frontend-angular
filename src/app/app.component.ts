import { Component } from '@angular/core';
import { BlockchainService } from './services/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
     title = 'spykecoin-crypto-js-and-angular';

    public blockchain;
    public showInfoMessage = true;

    constructor(private blockchainService: BlockchainService) {
        this.blockchain = blockchainService.blockchainInstance;
    }

    thereArePendingTransactions() {
        return this.blockchain.pendingTransactions.length > 0;
    }
}
