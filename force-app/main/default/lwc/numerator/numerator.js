import { LightningElement, api } from "lwc";

export default class Numerator extends LightningElement {
  _currentCount = 0;
  priorCount = 0;

  @api
  get counter() {
    return this._currentCount;
  }

  set counter(value) {
    this.priorCount = this._currentCount;
    this._currentCount = value;
  }

  @api
  maximizeCounter() {
    this.counter += 1000000;
  }

  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }

  handleMultiply(event) {
    const factor = event.detail;
    this.counter *= factor;
  }
}
