import * as firebase from 'firebase';

export interface ICrisis {
  name: string;
  createdAt?: Object;
}

export interface IFirebaseCrisis extends ICrisis{
  $key?: string;
}

export class Crisis implements ICrisis{
  public name: string;
  public createdAt?: Object = firebase.database.ServerValue.TIMESTAMP;
  constructor(init: Crisis
  ) {
    Object.assign(this, init);
  }
}

export const emptyCrisis: Crisis = {
  name: ''
};
