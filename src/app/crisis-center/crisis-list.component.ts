import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {Crisis, emptyCrisis} from './models/crisis';
import {CrisisService} from './services/crisis.service';
import 'rxjs/add/operator/switchMap';
import {MdSnackBar} from "@angular/material";
import {Observable} from "rxjs";

@Component({
  selector: 'my-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: [ './crisis-list.component.scss' ]
})
export class CrisisListComponent implements OnInit {

  crisises : Observable<Crisis[]>;
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
        return this.crisisService.getCrisises();
      });
  }

  onSave(crisis: Crisis): void {
      const crisisIns = new Crisis(crisis);
      this.crisisService.create(crisisIns)
        .then((crisis) => {
          // keep things in sync
          this.crisisModel = new Crisis(emptyCrisis);
          this.showFlashMessage('Crisis with name ' + crisisIns.name +' saved', 'SAVE');
        });
  }

  deleteCrisis(crisis: Crisis): void {
    this.crisisService.deleteCrisis(crisis)
      .then(() => {
      this.crisises.subscribe(
        (h) => {
          h.filter((h) => {
            return h !== crisis;
          });
        }
      );
      if (this.selectedId == crisis._id) { this.selectedId = null; }
      this.showFlashMessage('Crisis with name ' + crisis.name +' deleted', 'DELETE');
    });
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis._id;
    this.router.navigate([crisis._id], { relativeTo: this.route });
  }

  showFlashMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }

  isSelected(crisis: Crisis) { return crisis._id === this.selectedId; }
}
