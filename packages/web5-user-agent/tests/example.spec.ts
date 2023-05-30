import { expect } from 'chai';

import { add, divide, hello } from '../src/main.js';

describe('Web5 User Agent', () => {
  it('works', () => {
    const result = hello();
    expect(result).to.equal('Hello, world!');
  });

  it('can add', () => {
    const result = add(1, 2);
    expect(result).to.equal(3);
  });

  it('can divide', () => {
    const result = divide(4, 2);
    expect(result).to.equal(2);
  });
});