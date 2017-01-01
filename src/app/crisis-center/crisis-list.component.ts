import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {Crisis, IFirebaseCrisis, emptyCrisis} from './models/crisis';
import {CrisisService} from './services/crisis.service';
import {Observable} from "rxjs";
import 'rxjs/add/operator/switchMap';
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'my-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: [ './crisis-list.component.scss' ]
})
export class CrisisListComponent implements OnInit {

  crisises: Observable<IFirebaseCrisis[]>;
  crisisModel: Crisis = new Crisis(emptyCrisis);
  private selectedId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crisisService: CrisisService,
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

  onSelect(crisis: IFirebaseCrisis) {
    this.selectedId = crisis.$key;
    this.router.navigate([crisis.$key], { relativeTo: this.route });
  }

  showFlashMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }

  isSelected(crisis: IFirebaseCrisis) { return crisis.$key === this.selectedId; }
}
