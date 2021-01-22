py  =  py3

help:
	@echo make install
	@echo make shell
	@echo make install
	@echo make start
	@echo make dev
	@echo make test
	@echo make migrate
	@echo make run
	@echo make clean
	@echo make admin

	
install:
	pipenv install

shell:
	pipenv shell

install:
	yarn --cwd "./snobrid-v7/frontend" install 

start:
	yarn --cwd "./snobrid-v7/frontend" start 

dev:
	yarn --cwd "./snobrid-v7/frontend" dev 

test:
	yarn --cwd "./snobrid-v7/frontend" test

migrate:
	$(py) manage.py makemigrations ./snobird-v7/backend
	$(py) manage.py migrate ./snobird-v7/backend

run:
	$(py) manage.py runserver ./snobird-v7/backend

clean:
	$(py) manage.py  sqlflush ./snobird-v7/backend
admin:
	$(py) manage.py createsuperuser ./snobird-v7/backend


