import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle( 'Tour of Hero|Dashboard' );
    this.heroService.getHeroes()
      .then(heroes => {
        if (heroes) {
          this.heroes = heroes.slice(0, 4)
        }
      });
  }
}
