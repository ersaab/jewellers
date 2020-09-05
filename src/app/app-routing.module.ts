import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickQuoteComponent } from './shared/quick-quote/quick-quote.component';
import { ManuListComponent } from './manufacturer/manu-list/manu-list.component';
import { CustListComponent } from './customer/cust-list/cust-list.component';


const routes: Routes = [
  { path: "", component: QuickQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
