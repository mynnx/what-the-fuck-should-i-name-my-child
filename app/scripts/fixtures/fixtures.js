/*global define*/
// fixtures come from http://www.ssa.gov/oact/babynames/limits.html

define([
    'text!fixtures/male.json',
    'text!fixtures/female.json',
    'text!fixtures/ambiguous.json'
], function (maleFile, femaleFile, ambiguousFile) {
    'use strict';

    var maleNames = JSON.parse(maleFile),
        femaleNames = JSON.parse(femaleFile),
        ambiguousNames = JSON.parse(ambiguousFile);

    return {
        male: {
            'total': maleNames.total,
            'names': maleNames.names
        },
        female: {
            'total': femaleNames.total,
            'names': femaleNames.names
        },
        ambiguous: {
            'total': ambiguousNames.total,
            'names': ambiguousNames.names
        }
    };
});

