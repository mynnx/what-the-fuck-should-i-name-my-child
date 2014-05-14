#!/usr/bin/python
"""
Parses a list of names in the format:
    <name>, <gender (M, F)>, <# people with name>
(such as the one at http://www.ssa.gov/oact/babynames/limits.html)


Finds names that appear in both genders, and tries to build a weighted 
 distribution search array of names, using the weighting formula:
    (# males and females with name) - abs(#males - #females)
 which prioritizes:
    names with roughly even male/female distribution
    popular names
Writes the structure to ambiguous.json

# TODO: explain what the fuck ^^^ means
"""

import sys
import json
from collections import defaultdict

def parse_names(file_name):
    name_list = {}
    with open(file_name) as f:
        for line in f:
            name, gender, freq = line.split(',')
            freq = int(freq)
            if name not in name_list:
                name_list[name] = { 'name': name,
                                    'one_gender': True,
                                    'count': freq }
            else:
                prev_count = name_list[name]['count']
                difference = (freq + prev_count) - abs(freq - prev_count)   
                name_list[name].update(one_gender=False,
                                       count=difference)

    ambiguous_names = [(name, value['count']) for name, value
                             in name_list.items() 
                             if value['one_gender'] == False]
    ambiguous_names = sorted(ambiguous_names,
                             key=lambda name_count: name_count[1],
                             reverse=True)

    a_weighted_dist = {'total': 0, 'names': []}
    for name, count in ambiguous_names:
        new_total = a_weighted_dist['total'] + int(count)
        a_weighted_dist['names'].append((name, new_total))
        a_weighted_dist['total'] = new_total

    return a_weighted_dist

if __name__ == '__main__':
    ambiguous_names = parse_names(sys.argv[1])
    with open('ambiguous.json', 'w+') as f:
        json.dump(ambiguous_names, f)
        f.close()

