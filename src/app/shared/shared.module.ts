import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HighlightDirective }  from './directives/highlight.directive';
import {MaterialModule} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [ HighlightDirective ],
  exports:      [
    HighlightDirective,
    CommonModule,
    MaterialModule ]
})
export class SharedModule { }
