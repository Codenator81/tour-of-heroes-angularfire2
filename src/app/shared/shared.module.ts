import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
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
    FormsModule,
    MaterialModule ]
})
export class SharedModule { }
