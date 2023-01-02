export class kelvin {
  constructor(K) {
    this.K = K;
  }
  KtoC = () => {
    return this.K - 273;
  };
  KtoR = () => {
    return (4 * (this.K - 273)) / 5;
  };
  KtoF = () => {
    return (9 * (this.K - 273)) / 5 + 32;
  };
}
