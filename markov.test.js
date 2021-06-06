const { MarkovMachine } = require('./markov');

test('should return object of data', () => {
  let mm = new MarkovMachine('the cat in the hat');
  expect(mm.chains).toEqual({
    the: ['cat', 'hat'],
    cat: ['in'],
    in: ['the'],
    hat: [null],
  });
  expect(mm.words).toEqual(['the', 'cat', 'in', 'the', 'hat']);
});

test('contain text', () => {
  let mm = new MarkovMachine('the cat in the hat');
  expect(mm.makeText()).toContain('hat');
});
