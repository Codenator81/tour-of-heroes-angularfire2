import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero, IFirebaseHero} from './models/hero';
import { HeroService } from './services/hero.service';
import {Observable} from "rxjs";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit {
  heroes: Observable<IFirebaseHero[]>;
  selectedHero: IFirebaseHero;

  heroModel: Hero = new Hero('','');

  powers = [];

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.visibleHeroes$;
    this.powers = this.heroService.getPower();
  }

  onSubmit(isValid): void {
    if (isValid) {
      if (!this.heroModel.alterEgo) {
          this.heroModel.alterEgo = '';
      }
      this.heroService.create(this.heroModel)
        .then(() => {
          this.heroModel = new Hero('', '', '');

        });
    }
  }

  deleteHero(hero:IFirebaseHero): void {
    this.heroService.deleteHero(hero)
      .then(() => {
        if (this.selectedHero === hero) { this.selectedHero = null; }
    });
  }

  onSelect(hero: IFirebaseHero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.$key]);
  }
}
