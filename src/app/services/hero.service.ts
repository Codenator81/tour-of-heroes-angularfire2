import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import {Hero, Powers} from "../models/hero";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {}

  getHeroes() : Promise<Hero[]> {
    return this.http.get('/api/v1/heroes')
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(`/api/v1/hero/${id}`)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    return this.http
      .put('/api/v1/hero/' + hero._id, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then((hero) => hero.json() as Hero)
      .catch(this.handleError);
  }

  create(hero: Hero) {
    return this.http
      .post('/api/v1/hero', JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(res => {
        return res.json() as Hero
      })
      .catch(this.handleError);
  }

  deleteHero(hero: Hero) {
    return this.http
      .delete('/api/v1/hero/' + hero._id)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getPower(): Array<any> {
    return Powers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
