import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {Crisis, IFirebaseCrisis, emptyCrisis} from './models/crisis';
import {CrisisService} from './services/crisis.service';
import {Observable} from "rxjs";
import 'rxjs/add/operator/switchMap';
import {MdDialog, MdDialogRef, MdSnackBar} from "@angular/material";
import {CrisisNameDialogComponent} from "./crisis-name-dialog/crisis-name-dialog.component";

@Component({
  selector: 'my-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: [ './crisis-list.component.scss' ]
})
export class CrisisListComponent implements OnInit {

  crisises: Observable<IFirebaseCrisis[]>;
  crisisModel: Crisis = new Crisis(emptyCrisis);
  dialogRef: MdDialogRef<CrisisNameDialogComponent>;
  private selectedId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit(): void {
    this.crisises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = params['id'];
        return this.crisisService.visibleCrisises$;
      });
  }

  onSave(crisis: Crisis): void {
      const crisisIns = new Crisis(crisis);
      this.crisisService.create(crisisIns)
        .then(() => {
          this.crisisModel = new Crisis(emptyCrisis);
          this.showFlashMessage('Crisis with name ' + crisisIns.name +' saved', 'SAVE');
        });
  }

  deleteCrisis(crisis:IFirebaseCrisis): void {
    this.crisisService.deleteCrisis(crisis);
  }

  openDialog(crisis: IFirebaseCrisis) {
    this.selectedId = crisis.$key;
    this.dialogRef = this.dialog.open(CrisisNameDialogComponent);
    this.dialogRef.componentInstance.crisis = crisis;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result == 'show') {
        this.dialogRef = null;
        this.router.navigate(['/crisis/detail', crisis.$key]);
      }
    });
  }

  showFlashMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }

  isSelected(crisis: IFirebaseCrisis) { return crisis.$key === this.selectedId; }
}
