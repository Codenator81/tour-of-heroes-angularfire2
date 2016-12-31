import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Observable } from "rxjs";
import {IFirebaseCrisis, Crisis} from "../models/crisis";

@Injectable()
export class CrisisService {

  visibleCrisises$: Observable<IFirebaseCrisis[]>;

  private crisises$: FirebaseListObservable<IFirebaseCrisis[]>;

  constructor(private af:AngularFire) {
    this.crisises$ = af.database.list('crisises');
    this.visibleCrisises$ = this.crisises$;
  }

  getCrisis(id: number) : Observable<IFirebaseCrisis> {
    return this.af.database.object(`crisises/${id}`);
  }

  update(crisis: IFirebaseCrisis, formValues: any): firebase.Promise<any> {
     return this.crisises$.update( crisis.$key, formValues );
  }

  create(crisis: Crisis): firebase.Promise<any> {
    return this.crisises$.push(crisis);
  }

  deleteCrisis(crisis: IFirebaseCrisis): firebase.Promise<any> {
    return this.crisises$.remove(crisis.$key);
  }
}
