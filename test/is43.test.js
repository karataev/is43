const is43 = require('../index');

it('is 43', () => {
  expect(is43(43)).toEqual(true);
});

it('is not 43', () => {
  expect(is43(42)).toEqual(false);
});
