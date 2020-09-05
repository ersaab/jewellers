import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { KIRPAComponent } from './AKAAL/kirpa.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Dashboard/header/header.component';
import { FooterComponent } from './Dashboard/footer/footer.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';

import { CustomerLogbookComponent } from './Customer/Logbook/customer-logbook/customer-logbook.component';
import { CustomerLogbookAddlogComponent } from './Customer/Logbook/customer-logbook-addlog/customer-logbook-addlog.component';
import { CustomerLogbookUpdatelogComponent } from './Customer/Logbook/customer-logbook-updatelog/customer-logbook-updatelog.component';
import { CustomerLogbookDeletelogComponent } from './Customer/Logbook/customer-logbook-deletelog/customer-logbook-deletelog.component';

import { ManufacturerProfileComponent } from './Manufacturer/Profile/manufacturer-profile/manufacturer-profile.component';
import { ManufacturerProfileEditComponent } from './Manufacturer/Profile/manufacturer-profile-edit/manufacturer-profile-edit.component';
import { ManufacturerProfileAddComponent } from './Manufacturer/Profile/manufacturer-profile-add/manufacturer-profile-add.component';
import { ManufacturerProfileDeleteComponent } from './Manufacturer/Profile/manufacturer-profile-delete/manufacturer-profile-delete.component';

import { CustomerProfileComponent } from './Customer/Profile/customer-profile/customer-profile.component';
import { CustomerProfileAddComponent } from './Customer/Profile/customer-profile-add/customer-profile-add.component';
import { CustomerProfileEditComponent } from './Customer/Profile/customer-profile-edit/customer-profile-edit.component';
import { CustomerProfileUpdateComponent } from './Customer/Profile/customer-profile-update/customer-profile-update.component';

import { ManufacturerLogbookComponent } from './Manufacturer/Logbook/manufacturer-logbook/manufacturer-logbook.component';
import { ManufacturerLogbookAddComponent } from './Manufacturer/Logbook/manufacturer-logbook-add/manufacturer-logbook-add.component';
import { ManufacturerLogbookEditComponent } from './Manufacturer/Logbook/manufacturer-logbook-edit/manufacturer-logbook-edit.component';
import { ManufacturerLogbookDeleteComponent } from './Manufacturer/Logbook/manufacturer-logbook-delete/manufacturer-logbook-delete.component';
import { QuickQuoteComponent } from './Shared/quick-quote/quick-quote.component';
import { ManuListComponent } from './Manufacturer/manu-list/manu-list.component';
import { CustListComponent } from './Customer/cust-list/cust-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KIRPAComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CustomerProfileComponent,
    CustomerProfileAddComponent,
    CustomerProfileEditComponent,
    CustomerProfileUpdateComponent,
    CustomerLogbookComponent,
    CustomerLogbookAddlogComponent,
    CustomerLogbookUpdatelogComponent,
    CustomerLogbookDeletelogComponent,
    ManufacturerProfileComponent,
    ManufacturerProfileEditComponent,
    ManufacturerProfileAddComponent,
    ManufacturerProfileDeleteComponent,
    ManufacturerLogbookComponent,
    ManufacturerLogbookAddComponent,
    ManufacturerLogbookEditComponent,
    ManufacturerLogbookDeleteComponent,
    QuickQuoteComponent,
    ManuListComponent,
    CustListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
