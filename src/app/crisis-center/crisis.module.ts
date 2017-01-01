import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {SharedModule} from "../shared/shared.module";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {NewCrisisComponent} from "./new-crisis/new-crisis.component";
import {CrisisRoutingModule} from "./crisis-routing.module";
import {CrisisService} from "./services/crisis.service";
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";

@NgModule({
  imports: [ CommonModule,
    FormsModule,
    SharedModule,
    CrisisRoutingModule ],
  declarations: [ CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    NewCrisisComponent
  ],
  providers: [CrisisService]
})
export class CrisisModule { }
