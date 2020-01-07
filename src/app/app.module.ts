import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import{ MovieBookingService } from './movie-booking.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    SearchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
