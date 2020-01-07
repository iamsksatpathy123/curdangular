import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
const routes: Routes = [
  {path:"", redirectTo:"booking",pathMatch:"full"},
{path:"booking",component: BookingComponent },
{path:"delete",component:SearchDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
