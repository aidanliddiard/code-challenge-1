// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven,
} from '../functions.js';

const { test, skip } = QUnit;

test('this bunny test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});

test('this dog test should pass', (expect) => {
    const expected = 'dogs are awesome!!!';

    const actual = addExclamationPoints('dogs are awesome');

    expect.equal(actual, expected);
});

test('this exclamation test should pass', (expect) => {
    const expected = ' !!!';

    const actual = addExclamationPoints(' ');

    expect.equal(actual, expected);
});

test('7*4 should be 28', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('7*5 should be 35', (expect) => {
    const expected = 35;

    const actual = multiplyBySeven(5);

    expect.equal(actual, expected);
});

test('7*6 should be 42', (expect) => {
    const expected = 42;

    const actual = multiplyBySeven(6);

    expect.equal(actual, expected);
});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

