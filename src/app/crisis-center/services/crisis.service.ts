import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import {Crisis} from "../models/crisis";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CrisisService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {}

  getCrisises() : Promise<Crisis[]> {
    return this.http.get('/api/v1/crisises')
      .toPromise()
      .then(response => response.json() as Crisis[])
      .catch(this.handleError);
  }

  getCrisis(id: number) : Promise<Crisis> {
    return this.http.get(`/api/v1/crisis/${id}`)
      .toPromise()
      .then(response => response.json() as Crisis)
      .catch(this.handleError);
  }

  update(crisis: Crisis): Promise<Crisis> {
    return this.http
      .put('/api/v1/crisis/' + crisis._id, JSON.stringify(crisis), {headers: this.headers})
      .toPromise()
      .then((crisis) => crisis)
      .catch(this.handleError);
  }

  create(crisis: Crisis) {
    return this.http
      .post('/api/v1/crisis', JSON.stringify(crisis), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  deleteCrisis(crisis: Crisis): Promise<Crisis> {
    return this.http
      .delete('/api/v1/crisis/' + crisis._id)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
