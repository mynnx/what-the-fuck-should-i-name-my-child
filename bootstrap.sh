#!/usr/bin/env bash

# End-to-end 'test' - clones a fresh copy, grabs name lists from the SSA, sets up the app, and runs.

git clone https://github.com/mynnx/what-the-fuck-should-i-name-my-child.git
cd what-the-fuck-should-i-name-my-child
mkdir name-lists && cd name-lists
wget http://www.ssa.gov/oact/babynames/names.zip && unzip names.zip
../util/parse_social_security_names.py yob2014.txt ../app/scripts/fixtures/male.json ../app/scripts/fixtures/female.json
../util/ambiguous_names.py yob2014.txt ../app/scripts/fixtures/ambiguous.json
../util/parse_quotes.py ../app/scripts/fixtures/nameQuotes.txt ../app/scripts/fixtures/nameQuotes.json
cd ..
rm -rf name-lists
npm install & bower install
wait
grunt serve
