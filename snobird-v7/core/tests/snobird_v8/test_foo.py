import pytest

import snobird_v8.foo
from snobird_v8.foo import Foo
from snobird_v8.foo2 import Foo2


@pytest.fixture
def foo():
    foo = Foo(2)
    return foo

@pytest.fixture
def foo2():
    foo2 = Foo2()
    return foo2    

def test_foo_bar(foo):
    assert foo.bar() == 4

def test_foo2_bar(foo2):
    assert foo2.bar(2) == 4    