import { NgModule }            from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { AnimComponent }    from './anim.component';

const routes: Routes = [
  { path: 'main',    component: AnimComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimRoutingModule {}
