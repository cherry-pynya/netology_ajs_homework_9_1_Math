// eslint-disable-next-line import/extensions
import { Parser } from 'webpack';
import Character from './Character.js';

export default class MathChar extends Character {
  constructor(name) {
    super(name);
    this.stan = false;
    this.distance = 1;
  }

  get stoned() {
    return this.stan;
  }

  set stoned(value) {
    this.stan = value;
  }

  get atack() {
    if (!this.stoned) {
      return this.finalAtack * (1 - (this.distance - 1) / 10);
    }
    return Math.floor((this.finalAtack * (1 - (this.distance - 1) / 10)) - (Math.log2(this.distance) * 5));
  }

  set atack(valeu) {
    this.finalAtack = valeu;
  }
}
