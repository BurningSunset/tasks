// 28.05.2022
// examples of using assert.equal()
import assert from 'assert';
import factorial from './functions.js';

assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);
assert.equal(factorial(1), 1);
assert.equal(factorial(0), 1);
assert.equal(factorial(4), 24);
