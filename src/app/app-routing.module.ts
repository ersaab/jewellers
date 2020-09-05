import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickQuoteComponent } from './Shared/quick-quote/quick-quote.component';
import { ManuListComponent } from './Manufacturer/manu-list/manu-list.component';
import { CustListComponent } from './Customer/cust-list/cust-list.component';


const routes: Routes = [
  { path: "", component: QuickQuoteComponent },
  { path: "Manu", component: ManuListComponent },
  { path: "Cust", component: CustListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
