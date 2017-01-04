export interface IHero {
  _id: string;
  name: string;
  power: string;
  alterEgo?: string;
  createdAt?: string;
}

//Init with new Hero({}) and new Hero produce error. For this purpose created emptyHero ))
export class Hero implements IHero{
  _id: string;
  public name: string;
  public power: string;
  public createdAt?: string = new Date().toLocaleDateString();
  public alterEgo?: string = '';
  constructor(init: Hero
  ) {
    Object.assign(this, init);
  }
}

export const emptyHero: Hero = {
  _id: '',
  name: '',
  power: '',
  alterEgo: ''
};

export const Powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
