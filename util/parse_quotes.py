#!/usr/bin/python
"""
Parses a list of names in the format:
    <quote>|<weight>
(such as the one at app/scripts/fixtures/nameQuotes.txt)


It precomputes a weighted distribution search array of names, writing the
 structure to 'quotes.json'.

# TODO: explain what the fuck ^^^ means
"""

import sys
import json

def parse_quotes(file_name):
    quote_list = {'total': 0, 'quotes': []}
    with open(file_name) as f:
        for line in f:
            quote, weight = line.split('|')
            new_total = quote_list['total'] + int(weight)
            quote_list['quotes'].append((quote, new_total))
            quote_list['total'] = new_total
            
    return quote_list

if __name__ == '__main__':
    quotes = parse_quotes(sys.argv[1])
    with open('quotes.json', 'w+') as f:
        json.dump(quotes, f)
        f.close()

