import { NgModule }            from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";
import {CanDeactivateGuard} from "../services/can-deactivate-guard.service";
import {CrisisDetailResolver} from "./services/crisis-detail-resolver.service";

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisRoutingModule {}
