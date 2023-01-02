export class celcius {
  constructor(C) {
    this.C = C;
  }
  CtoR = () => {
    return (4 * this.C) / 5;
  };
  CtoK = () => {
    return this.C + 273;
  };
  CtoF = () => {
    return (9 * this.C) / 5 + 32;
  };
}
