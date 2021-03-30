export default class Character {
  constructor(name) {
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('invalid name');
    }
    this.health = 100;
    this.level = 1;
    this.distance = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.defence *= 1.2;
      this.attack *= 1.2;
    } else {
      throw new Error('YOU DIED!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
