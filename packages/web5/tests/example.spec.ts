import { expect } from 'chai';

import { hello, subtract } from '../src/main.js';

describe('Web5 User Agent', () => {
  it('works', () => {
    const result = hello();
    expect(result).to.equal('Hello, world!');
  });

  it('can subtract', () => {
    const result = subtract(2, 1);
    expect(result).to.equal(1);
  });
});