import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable, ReplaySubject} from "rxjs";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  visibleHeroes$: Observable<Hero[]>;

  private heroes$: FirebaseListObservable<Hero[]>;

  constructor(private af:AngularFire) {
    this.heroes$ = af.database.list('heroes');
    this.visibleHeroes$ = this.heroes$;
  }

  getHero(id: number) : Observable<Hero> {
    return this.af.database.object(`heroes/${id}`);
  }

  update(hero: Hero): firebase.Promise<any> {
     return this.heroes$.update( hero.$key, { "name" : hero.name  } );
  }
}
