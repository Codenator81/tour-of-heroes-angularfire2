import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Observable } from "rxjs";
import {IFirebaseHero, Hero, Powers} from "../models/hero";

@Injectable()
export class HeroService {

  visibleHeroes$: Observable<IFirebaseHero[]>;

  private heroes$: FirebaseListObservable<IFirebaseHero[]>;

  constructor(private af:AngularFire) {
    this.heroes$ = af.database.list('heroes');
    this.visibleHeroes$ = this.heroes$;
  }

  getHero(id: number) : Observable<IFirebaseHero> {
    return this.af.database.object(`heroes/${id}`);
  }

  update(hero: IFirebaseHero, formValues: any): firebase.Promise<any> {
     return this.heroes$.update( hero.$key, formValues );
  }

  create(hero: Hero): firebase.Promise<any> {
    return this.heroes$.push(hero);
  }

  deleteHero(hero: IFirebaseHero): firebase.Promise<any> {
    return this.heroes$.remove(hero.$key);
  }

  getPower(): Array<any> {
    return Powers;
  }
}
