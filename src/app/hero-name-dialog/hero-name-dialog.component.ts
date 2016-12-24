import { Component } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {IFirebaseHero} from "../models/hero";

@Component({
  selector: 'app-hero-name-dialog',
  templateUrl: './hero-name-dialog.component.html',
  styleUrls: ['./hero-name-dialog.component.scss']
})
export class HeroNameDialogComponent {
  hero: IFirebaseHero;
  constructor(public dialogRef: MdDialogRef<HeroNameDialogComponent>) { }
}
