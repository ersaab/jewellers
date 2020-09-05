import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { KIRPAComponent } from './AKAAL/kirpa.component';
import { AppComponent } from './app.component';
import { QuickQuoteComponent } from './shared/quick-quote/quick-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    KIRPAComponent,
    QuickQuoteComponent
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
