// eslint-disable-next-line import/extensions
import MathChar from './MathChar.js';

export default class Magician extends MathChar {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.defence = 40;
    this.atack = 10;
  }
}
