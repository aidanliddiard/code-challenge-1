// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
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


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

