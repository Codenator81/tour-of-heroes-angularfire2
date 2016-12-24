import * as firebase from 'firebase';

export interface IHero {
  name: string;
  power: string;
  alterEgo?: string;
}

export interface IFirebaseHero extends IHero{
  $key?: string;
}

export class Hero implements IHero{
  private createdAt: Object = firebase.database.ServerValue.TIMESTAMP;
  constructor(public name: string,
              public power: string,
              public alterEgo?: string,
  ) {

  }
}

export const Powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
