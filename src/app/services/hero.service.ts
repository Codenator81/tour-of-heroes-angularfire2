import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Observable } from "rxjs";
import { IHero, Hero } from "../models/hero";

@Injectable()
export class HeroService {

  visibleHeroes$: Observable<IHero[]>;

  private heroes$: FirebaseListObservable<IHero[]>;

  constructor(private af:AngularFire) {
    this.heroes$ = af.database.list('heroes');
    this.visibleHeroes$ = this.heroes$;
  }

  getHero(id: number) : Observable<IHero> {
    return this.af.database.object(`heroes/${id}`);
  }

  update(hero: IHero): firebase.Promise<any> {
     return this.heroes$.update( hero.$key, { "name" : hero.name  } );
  }

  create(name: string): firebase.Promise<any> {
    return this.heroes$.push(new Hero(name));
  }

  deleteHero(hero: IHero): firebase.Promise<any> {
    return this.heroes$.remove(hero.$key);
  }
}
