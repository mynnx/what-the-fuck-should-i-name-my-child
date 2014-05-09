/*global define*/
// fixtures come from http://www.ssa.gov/oact/babynames/limits.html

define([
    'text!fixtures/male.json',
    'text!fixtures/female.json'
], function (maleFile, femaleFile) {
    'use strict';

    var maleNames = JSON.parse(maleFile),
        femaleNames = JSON.parse(femaleFile);

    return {
        male: {
            'total': maleNames.total,
            'names': maleNames.names
        },
        female: {
            'total': femaleNames.total,
            'names': femaleNames.names
        }
    };
});

