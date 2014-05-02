define([
    'text!fixtures/male.js',
    'text!fixtures/female.js'
], function (maleNames, femaleNames) {
    'use strict';

    return {
        maleNames: JSON.parse(maleNames),
        femaleNames: JSON.parse(femaleNames)
    };
});

