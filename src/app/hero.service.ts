import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import {Observable} from "rxjs";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  constructor(private af:AngularFire) {
  }

  getHeroes() : Observable<Hero[]> {
    return this.af.database.list('heroes');
  }

  getHero(id: number) : Observable<Hero> {
    return this.af.database.object(`heroes/${id}`);
  }
}
