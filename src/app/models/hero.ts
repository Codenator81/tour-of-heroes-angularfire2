import * as firebase from 'firebase';

export interface IHero {
  $key?: string;
  name: string;
  createdAt: Object;
}

export class Hero implements IHero {
  name: string;
  createdAt: Object = firebase.database.ServerValue.TIMESTAMP;

  constructor(name: string) {
    this.name = name;
  }
}
