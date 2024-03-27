import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairDashboardComponent } from './sharead/compounents/fair-dashboard/fair-dashboard.component';
import { FairCardsComponent } from './sharead/compounents/fair-cards/fair-cards.component';
import { FairDetailsComponent } from './sharead/compounents/fair-details/fair-details.component';
import { NavbarComponent } from './sharead/compounents/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardsComponent,
    FairDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
