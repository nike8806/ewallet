import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferModule } from './pages/transfer/transfer.module';
import { 
    pages,
    pageRoutes
    } from './pages';

@NgModule({
  exports: [ RouterModule ],
  declarations: [
      pages.login.component,
      pages.balance.component,
      pages.founding.component,
      pages.history.component
  ],
  imports:[
      TransferModule,
      RouterModule.forRoot(pageRoutes)
  ]
})
export class AppRoutingModule { }
