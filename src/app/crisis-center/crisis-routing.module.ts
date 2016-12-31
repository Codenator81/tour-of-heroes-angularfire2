import { NgModule }            from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";

const routes: Routes = [
  { path: 'list',    component: CrisisListComponent },
  { path: 'detail/:id', component: CrisisDetailComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {}
