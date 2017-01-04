import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero";

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {

  heroes = [];

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  search(term: string): void {
    if (term.length <= 1) {
      this.heroes = [];
    } else {
      this.heroService.getHeroes()
        .then(heroes => this.heroes =
          heroes.filter(hero => hero.name.indexOf(term) !== -1));
    }
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero._id];
    this.router.navigate(link);
  }

}
