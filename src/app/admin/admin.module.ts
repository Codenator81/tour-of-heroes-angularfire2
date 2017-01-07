import { NgModule }       from '@angular/core';
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crises.component';
import { ManageHeroesComponent }    from './manage-heroes.component';
import { AdminRoutingModule }       from './admin-routing.module';
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "../services/auth-guard.service";
@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  providers: [
    AuthGuard
  ],
})
export class AdminModule {}
