import { NgModule }             from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { DashboardComponent }   from './hero/dashboard.component';
import { HeroesComponent }      from './hero/heroes.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import {PowerListComponent} from "./power/power-list/power-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ComposeMessageComponent} from "./compose-message.component";
import {CanDeactivateGuard} from "./services/can-deactivate-guard.service";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis.module#CrisisModule'
  },
  { path: 'powers',     component: PowerListComponent },
  { path: 'anim',       loadChildren: 'app/anim/anim.module#AnimModule' },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard],
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: '',           redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**',         component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [ RouterModule ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}
