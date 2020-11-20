import json
from jsonpath_ng import jsonpath, parse
from add_beta_bps import delete_observations, create_observations

def map(source):
    #datetime
    jsonpath_expr = parse("header[*].creation_date_time")
    for match in jsonpath_expr.find(source):
        date_time = match.value

    #patient
    jsonpath_expr = parse("header[*].user_id")
    for match in jsonpath_expr.find(source):
        user_id = match.value
    
    #heart_rate
    jsonpath_expr = parse("body[*].heart_rate[*].value")
    for match in jsonpath_expr.find(source):
        heart_rate = match.value
    
    #unit
    jsonpath_expr = parse("body[*].heart_rate[*].unit")
    for match in jsonpath_expr.find(source):
        unit = match.value

    create_observations(date_time, user_id, heart_rate, unit)

def load(file_path):
    print("*** load(). enter.")
    with open(file_path, 'r') as fp:
        for row_num, row in enumerate(fp):
            source = json.loads(row)
            target = map(source)

def main():
    source_file_path = "data/test.json"
    
    #debug
    delete_observations()

    load(source_file_path)

if __name__ == "__main__":
    main()