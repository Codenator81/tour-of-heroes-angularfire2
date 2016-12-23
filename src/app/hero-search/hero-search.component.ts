import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {HeroService} from "../services/hero.service";
import {IHero} from "../models/hero";

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {

  heroes: IHero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  search(term: string): void {
    if (term.length <= 1) {
      this.heroes = [];
    } else {
      this.heroService.visibleHeroes$
        .subscribe(heroes => this.heroes =
          heroes.filter(hero => hero.name.indexOf(term) !== -1));
    }
  }

  gotoDetail(hero: IHero): void {
    let link = ['/detail', hero.$key];
    this.router.navigate(link);
  }

}
