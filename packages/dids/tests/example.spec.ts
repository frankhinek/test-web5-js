import { expect } from 'chai';

import { hello } from '../src/main.js';

describe('Web5 User Agent', () => {
  it('works', () => {
    const result = hello();
    expect(result).to.equal('Hello, world!');
  });
});