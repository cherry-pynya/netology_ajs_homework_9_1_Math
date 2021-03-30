// eslint-disable-next-line import/extensions
import MathChar from './MathChar.js';

export default class Daemon extends MathChar {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.defence = 40;
    this.atack = 10;
  }
}
