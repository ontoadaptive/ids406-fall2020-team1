import snobird_v8.foo
from snobird_v8.foo import Foo
from snobird_v8.foo2 import Foo2

# NAA.
# - OOP
def test_foo():
    print('*** test_foo().')
    foo = Foo(2)
    # bar should return 2 x or double input value
    expected = 4
    actual = foo.bar()
    print('actual: {}, expected: {} '.format(actual, expected))
    assert actual == expected

# NAA.
# - FP
def test_foo2():
    print('*** test_foo2().')    
    foo2 = Foo2()
    # bar should return 2 x or double input value
    expected = 4
    actual = foo2.bar(2)
    print('actual: {}, expected: {} '.format(actual, expected))
    assert actual == expected

def main():
    test_foo()
    test_foo2()



if __name__ == '__main__':
    main()
