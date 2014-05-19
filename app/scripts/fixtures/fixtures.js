/*global define*/
// fixtures come from http://www.ssa.gov/oact/babynames/limits.html

define([
    'underscore',
    'text!fixtures/male.json',
    'text!fixtures/female.json',
    'text!fixtures/ambiguous.json',
    'text!fixtures/nameQuotes.json'
], function (_, maleFile, femaleFile, ambiguousFile, nameQuotesFile) {
    'use strict';

    var maleNames = JSON.parse(maleFile),
        femaleNames = JSON.parse(femaleFile),
        ambiguousNames = JSON.parse(ambiguousFile),
        nameQuotes = JSON.parse(nameQuotesFile);

    return {
        'male': {
            'total': maleNames.total,
            'names': maleNames.names
        },
        'female': {
            'total': femaleNames.total,
            'names': femaleNames.names
        },
        'ambiguous': {
            'total': ambiguousNames.total,
            'names': ambiguousNames.names
        },
        'nameQuotes': {
            'total': nameQuotes.total,
            'quotes': nameQuotes.quotes
        },
    };
});

