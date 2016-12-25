export interface IPower {
  name: string;
}

export interface IDBPower extends IPower{
  $key?: string;
}

export class Power implements IPower{
  constructor(public name: string) {}
}
