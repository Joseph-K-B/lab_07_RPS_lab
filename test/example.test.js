// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { userWin } from '../utils.js';



test ('rock beats scissors', (expect) => {
    const expected = 'win';
    const actual = userWin('rock', 'scissors');
    expect.equal(actual, expected);
});
test ('paper beats rock', (expect) => {
    const expected = 'win';
    const actual = userWin('paper', 'rock');
    expect.equal(actual, expected);
});
test ('scissors beats paper', (expect) => {
    const expected = 'win';
    const actual = userWin('scissors', 'paper');
    expect.equal(actual, expected);
});
test ('rock loses paper', (expect) => {
    const expected = 'lose';
    const actual = userWin('paper', 'scissors');
    expect.equal(actual, expected);
});
test ('scissors loses rock', (expect) => {
    const expected = 'lose';
    const actual = userWin('scissors', 'rock');
    expect.equal(actual, expected);
});
test ('paper loses scissors', (expect) => {
    const expected = 'lose';
    const actual = userWin('paper', 'scissors');
    expect.equal(actual, expected);
});