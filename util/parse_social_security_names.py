#!/usr/bin/python
"""
Parses a list of names in the format:
    <name>, <gender (M, F)>, <# people with name>
(such as the one at http://www.ssa.gov/oact/babynames/limits.html)


It precomputes a weighted distribution search array of names, writing the
 structures to 'male.json' and 'female.json'.

# TODO: explain what the fuck ^^^ means
"""

import sys
import json

def parse_names(file_name):
    name_list = {'M': {'total': 0, 'names': []}, 
                 'F': {'total': 0, 'names': []}}
    with open(file_name) as f:
        for line in f:
            name, gender, freq = line.split(',')
            new_total = name_list[gender]['total'] + int(freq)
            name_list[gender]['names'].append((name, new_total))
            name_list[gender]['total'] = new_total
            
    return (name_list['M'], name_list['F'])

if __name__ == '__main__':
    male_names, female_names = parse_names(sys.argv[1])
    for out_file, obj in (('male.json', male_names), ('female.json', female_names)):
        with open(out_file, 'w+') as f:
            json.dump(obj, f)
            f.close()
