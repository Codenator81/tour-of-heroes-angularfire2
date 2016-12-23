export interface IHero {
  $key?: string;
  name: string;
}

export class Hero implements IHero {
  name: string;
  createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];

  constructor(name: string) {
    this.name = name;
  }
}
