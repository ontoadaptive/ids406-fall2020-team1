# loader2.py
from abc import ABC, abstractmethod
import json
from jsonpath_ng import jsonpath, parse


class BaseAdapter(ABC):
    source_file_path = ""


    def __init__(self, source_file_path):
        print('*** BaseAdapter.__init__() constructor enter.')
        self.source_file_path = source_file_path


    def load(self):
        print('*** BaseAdapter.load() enter.')

        rows = []
        with open(self.source_file_path, "r") as fp:
            for row_num, row in enumerate(fp):
                source = json.loads(row)
                rows.append(source)
            print('  loaded {0} rows.'.format(len(rows)))
        return rows


    @abstractmethod
    def map(self):
        print('*** BaseAdapter.map() enter.')
        pass


class DjangoORMAdapter(BaseAdapter):
    def __init__(self, source_file_path):
        print('*** DjangoORMAdapter.__init__() constructor enter.')
        super().__init__(source_file_path)


    def map(self):
        print('*** DjangoORMAdapter.map() enter.')

        rows = super().load()
        targets = []

        for row_num, row in enumerate(rows):
            target = self.map_row(row)
            targets.append(target)

        print('  mapped {0} rows.'.format(len(rows)))

        return targets


    def map_row(self, source):
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

        print("  source: {0}".format(source))
        print("  target: {0}".format(target))

        # JC !!!
        # - map Django ORM here
        # - refer to add_beta_bps.py


class NodejsMockServerAdapter(BaseAdapter):
    def __init__(self, source_file_path):
        super().__init__(source_file_path)


    def map(self):
        pass


    def map_row(self, source):
        pass


def main():
    source_file_path = "../data/test-small.json"

    # 2. OOP
    adapter = DjangoORMAdapter(source_file_path)
    adapter.map()


if __name__ == "__main__":
    main()
