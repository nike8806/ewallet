import { NgModule } from '@angular/core';
import { DebitComponent } from './debit/debit.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransferComponent } from './transfer.component';

@NgModule({
  imports: [
  ],
  declarations: [
    TransferComponent,
    DebitComponent,
    WalletComponent,
  ],
  exports: [
      TransferComponent,
      WalletComponent,
      DebitComponent
  ]
})
export class TransferModule { }
