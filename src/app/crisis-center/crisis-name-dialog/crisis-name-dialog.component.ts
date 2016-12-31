import { Component } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {IFirebaseCrisis} from "../models/crisis";

@Component({
  selector: 'app-crisis-name-dialog',
  templateUrl: './crisis-name-dialog.component.html',
  styleUrls: ['./crisis-name-dialog.component.scss']
})
export class CrisisNameDialogComponent {
  crisis: IFirebaseCrisis;
  constructor(public dialogRef: MdDialogRef<CrisisNameDialogComponent>) { }
}
