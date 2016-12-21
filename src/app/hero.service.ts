import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class HeroService {

  constructor(private af:AngularFire) {
  }

  getHeroes() : Observable<any> {
    return this.af.database.list('heroes');
  }

  getHero(id: number) : Observable<any> {
    return this.af.database.object(`heroes/${id}`);
  }
}
