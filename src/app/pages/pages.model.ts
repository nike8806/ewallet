/* 
 * Pages register file
 */
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BalanceComponent } from './balance/balance.component';
import { FoundingComponent } from './founding/founding.component';
import { HistoryComponent } from './history/history.component'
import { TransferComponent } from './transfer/transfer.component'

import { DebitComponent } from './transfer/debit/debit.component';
import { WalletComponent } from './transfer/wallet/wallet.component';

export const pages = {
  login:  { name:'Login', path: 'login', component: LoginComponent },
  balance: { name:'Balance', path: 'balance', component: BalanceComponent },
  founding: { name:'Founding', path: 'founding', component: FoundingComponent },
  history: { name:'History', path: 'history', component: HistoryComponent },
  transfer: { name: 'Transfer', path: 'transfer', component: TransferComponent, 
            children: {
                wallet: { name: 'Wallet', path: 'wallet', component: WalletComponent },
                debit: { name: 'Debit', path: 'debit', component: DebitComponent }
            }
           }
};

export const pageRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: pages.login.path, component: pages.login.component },
  { path: pages.balance.path, component: pages.balance.component },
  { path: pages.founding.path, component: pages.founding.component },
  { path: pages.history.path, component: pages.history.component },
  { path: pages.transfer.path, component: pages.transfer.component,
    children: [
      {
        path: pages.transfer.children.debit.path,
        component: pages.transfer.children.debit.component
      },
      { 
        path: pages.transfer.children.wallet.path, 
        component: pages.transfer.children.wallet.component
      } 
    ]
  }
];

