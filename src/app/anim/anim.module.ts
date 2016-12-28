import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {SharedModule} from "../shared/shared.module";

import { AnimComponent }   from './anim.component';
import {AnimRoutingModule} from "./anim-routing.module";

@NgModule({
  imports:      [ CommonModule, FormsModule, SharedModule, AnimRoutingModule ],
  declarations: [ AnimComponent ]
})
export class AnimModule { }
