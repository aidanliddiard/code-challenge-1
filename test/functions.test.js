// IMPORT MODULES under test here:
import { 
    addExclamationPoints, divideThenMultiply, getLastItem, getSecondItem, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray, returnAsAString,
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

test('4 should be 24', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});
test('5 should be 30', (expect) => {
    const expected = 30;

    const actual = multiplyBy12ThenHalve(5);

    expect.equal(actual, expected);
});
test('2 should be 12', (expect) => {
    const expected = 12;

    const actual = multiplyBy12ThenHalve(2);

    expect.equal(actual, expected);
});

test('8, 4, 5 should be 10', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});

test('12, 4, 2 should be 6', (expect) => {
    const expected = 6;

    const actual = divideThenMultiply(12, 4, 2);

    expect.equal(actual, expected);
});

test('24, 6, 10 should be 40', (expect) => {
    const expected = 40;

    const actual = divideThenMultiply(24, 6, 10);

    expect.equal(actual, expected);
});

test('return 1,2,3 as an array', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected);
});

test('return 4,5,6 as an array', (expect) => {
    const expected = [4, 5, 6];

    const actual = returnAsAnArray(4, 5, 6);

    expect.deepEqual(actual, expected);
});

test('return a,b,c as an array', (expect) => {
    const expected = ['a', 'b', 'c'];

    const actual = returnAsAnArray('a', 'b', 'c');

    expect.deepEqual(actual, expected);
});

test('return 1,2,3 as an string', (expect) => {
    const expected = '123';

    const actual = returnAsAString(1, 2, 3);

    expect.deepEqual(actual, expected);
});
test('return 4,5,6 as an string', (expect) => {
    const expected = '456';

    const actual = returnAsAString(4, 5, 6);

    expect.deepEqual(actual, expected);
});
test('return a,b,c as an string', (expect) => {
    const expected = 'abc';

    const actual = returnAsAString('a', 'b', 'c');

    expect.deepEqual(actual, expected);
});

test('greeting lucky number 12', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});

test('greeting lucky number 69', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 69.';

    const actual = makeLuckyGreeting(60, 9);

    expect.equal(actual, expected);
});

test('greeting lucky number 3', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 3.';

    const actual = makeLuckyGreeting(1, 2);

    expect.equal(actual, expected);
});

test('apple', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('dog', (expect) => {
    const expected = 'dog';

    const actual = getSecondItem(['cat', 'dog', 'chimp', 'bird']);

    expect.equal(actual, expected);
});

test('3', (expect) => {
    const expected = '3';

    const actual = getSecondItem(['1', '3']);

    expect.equal(actual, expected);
});

test('plum', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);

});

test('kiwi', (expect) => {
    const expected = 'kiwi';

    const actual = getLastItem(['kiwi']);

    expect.equal(actual, expected);
});

test('sudoku', (expect) => {
    const expected = 'sudoku';

    const actual = getLastItem(['monopoly', 'clue', 'caatan', 'sudoku']);

    expect.equal(actual, expected);
});


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

