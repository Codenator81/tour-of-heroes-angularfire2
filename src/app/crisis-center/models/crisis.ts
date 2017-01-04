export class Crisis {
  _id: string;
  public name: string;
  public createdAt?: string = new Date().toLocaleDateString();
  constructor(init: Crisis
  ) {
    Object.assign(this, init);
  }
}

export const emptyCrisis: Crisis = {
  _id: '',
  name: ''
};
