import Magician from '../Magician.js';

test('create Mage', () => {
  const merlin = new Magician('merlin');
  expect(merlin).toEqual({
    defence: 40,
    distance: 1,
    finalAtack: 10,
    health: 100,
    level: 1,
    name: 'merlin',
    stan: false,
    type: 'Magician',
  });
});

test('not stoned / distance 1', () => {
  const merlin = new Magician('merlin');
  merlin.atack = 200;
  expect(merlin.atack).toBe(200);
});

test('not stoned / distance 3', () => {
  const merlin = new Magician('merlin');
  merlin.distance = 3;
  merlin.atack = 200;
  expect(merlin.atack).toBe(160);
});

test('not stoned / distance 5', () => {
  const merlin = new Magician('merlin');
  merlin.distance = 5;
  merlin.atack = 200;
  expect(merlin.atack).toBe(120);
});

test('stoned / distance 1', () => {
  const merlin = new Magician('merlin');
  merlin.stoned = true;
  merlin.atack = 200;
  expect(merlin.atack).toBe(200);
});

test('stoned / distance 1', () => {
  const merlin = new Magician('merlin');
  merlin.stoned = true;
  merlin.atack = 200;
  expect(merlin.atack).toBe(200);
});

test('stoned / distance 3', () => {
  const merlin = new Magician('merlin');
  merlin.stoned = true;
  merlin.distance = 3;
  merlin.atack = 200;
  expect(merlin.atack).toBe(152);
});

test('stoned / distance 5', () => {
  const merlin = new Magician('merlin');
  merlin.stoned = true;
  merlin.distance = 5;
  merlin.atack = 200;
  expect(merlin.atack).toBe(108);
});
