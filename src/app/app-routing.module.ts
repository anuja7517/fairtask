import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FairDetailsComponent } from './sharead/compounents/fair-details/fair-details.component';
import { FairDashboardComponent } from './sharead/compounents/fair-dashboard/fair-dashboard.component';

const routes: Routes = [
  {
    path :'fairs',
    component :FairDashboardComponent,
    children : [
    {
      path : ':fairId',
      component : FairDetailsComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
