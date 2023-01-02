export class farenhet {
  constructor(F) {
    this.F = F;
  }
  FtoC = () => {
    return (5 * (this.F - 32)) / 9;
  };
  FtoR = () => {
    return (4 * (this.F - 32)) / 9;
  };
  FtoK = () => {
    return (5 * (this.F - 32)) / 9 + 273;
  };
}
