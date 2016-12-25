import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {IDBPower, Power} from "../models/power";
import {Observable} from "rxjs";

@Injectable()
export class PowerService {

  visiblePowers$: Observable<IDBPower[]>;
  private powers$: FirebaseListObservable<IDBPower[]>;

  constructor(private af:AngularFire) {
    this.powers$ = af.database.list('powers');
    this.visiblePowers$ = this.powers$;
  }

  create(power: Power): firebase.Promise<any> {
    return this.powers$.push(power);
  }
}
