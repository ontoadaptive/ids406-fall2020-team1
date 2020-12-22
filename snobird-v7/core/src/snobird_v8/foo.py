class Foo(): 
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def bar(self):
        self.y = 0
        return self.x * 2

    def side_effect(self):
        self.y = 0

    def goo(self):
        # self.side_effect()
        return self.y * 3        