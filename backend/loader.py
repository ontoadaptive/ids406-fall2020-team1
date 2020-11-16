# load_bps.py
import json
from jsonpath_ng import jsonpath, parse


class BaseAdapter:
    source_file_path = ""

    def __init__(self, source_file_path):
        self.source_file_path = source_file_path

    def load(self):
        with open(self.source_file_path, "r") as fp:
            for row_num, row in enumerate(fp):
                source = json.loads(row)
                target = map(source)
                print("map row_num: {0}".format(target))
                print("  source: {0}".format(source))
                print("  target: {0}".format(target))


class DjangoORMAdapter(BaseAdapter):
    def __init__(self, source_file_path):
        super().__init__(source_file_path)

    def map(self, source):
        # header_id
        jsonpath_expr = parse("header[*].id")
        for match in jsonpath_expr.find(source):
            header_id = match.value
            print("header_id: {0}".format(header_id))

        # timestamp
        for match in jsonpath_expr.find(source):
            time_stamp = match.value
            print("time_stamp: {0}".format(time_stamp))

        # format target_json
        target_json = {"id": header_id, "time_stamp": time_stamp}
        target = json.dumps(target_json)

        # JC !!!
        # - map Django ORM here
        # - refer to add_beta_bps.py

        return target


class NodejsMockServerAdapter(BaseAdapter):
    def __init__(self, source_file_path):
        super().__init__(source_file_path)

    def map(self, source):
        pass


def map(source):
    # header_id
    jsonpath_expr = parse("header[*].id")
    for match in jsonpath_expr.find(source):
        header_id = match.value
        print("header_id: {0}".format(header_id))

    # timestamp
    for match in jsonpath_expr.find(source):
        time_stamp = match.value
        print("time_stamp: {0}".format(time_stamp))

    # format target_json
    target_json = {"id": header_id, "time_stamp": time_stamp}
    target = json.dumps(target_json)

    return target


def load(file_path):
    print("*** load(). enter.")
    with open(file_path, "r") as fp:
        for row_num, row in enumerate(fp):
            source = json.loads(row)
            target = map(source)
            print("map row_num: {0}".format(target))
            print("  source: {0}".format(source))
            print("  target: {0}".format(target))


def main():
    # 1. transaction script
    source_file_path = "../data/test-small.json"
    load(source_file_path)

    # 2. OOP
    adapter = DjangoORMAdapter(source_file_path)
    adapter.load()


if __name__ == "__main__":
    main()
