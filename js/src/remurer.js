export class remurer {
  constructor(R) {
    this.R = R;
  }
  RtoC = () => {
    return (5 * this.R) / 4;
  };
  RtoK = () => {
    return (5 * this.R) / 4 + 273;
  };
  RtoF = () => {
    return (9 * this.R) / 4 + 32;
  };
}
