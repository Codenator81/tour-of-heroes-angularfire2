import * as firebase from 'firebase';

export interface IHero {
  name: string;
  power: string;
  alterEgo?: string;
  createdAt?: Object;
}

export interface IFirebaseHero extends IHero{
  $key?: string;
}

export class Hero implements IHero{
  public name: string;
  public power: string;
  public createdAt?: Object = firebase.database.ServerValue.TIMESTAMP;
  public alterEgo?: string = '';
  constructor(init: Hero
  ) {
    Object.assign(this, init);
  }
}

export const emptyHero: Hero = {
  name: '',
  power: '',
  alterEgo: ''
};

export const Powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
