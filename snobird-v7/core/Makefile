SRC_ROOT = src
TEST_ROOT= tests
SRC = $(SRC_ROOT)/snobird_v8/foo.py
TEST = $(TEST_ROOT)/snobird_v8/test_foo.py

help:
	@echo make clean
	@echo make install
	@echo make run
	@echo make test

install:
	pip install -e $(SRC_ROOT)

clean-pyc:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +

clean-build:
	rm -fr build/
	rm -fr dist/
	rm -fr *.egg-info

clean-cache:
	rm -fr __pycache__	

clean: clean-pyc clean-build clean-cache

run: clean
	python3 foo_bar.py

test: clean install
	PYTHONPATH=$(SRC_DIR)
	@echo $(PYTHONPATH); pytest $(TEST)
