PYTHON  =  python3

help:
	@echo make install-backend
	@echo make shell
	@echo make start
	@echo make dev
	@echo make test
	@echo ""
	@echo make install-frontend
	@echo make migrate
	@echo make run
	@echo make clean
	@echo make admin

	
install-backend:
	pipenv install

shell:
	pipenv shell

install-frontend:
	yarn --cwd "./snobird-v7/frontend" install 

start:
	yarn --cwd "./snobird-v7/frontend" start 

dev:
	yarn --cwd "./snobird-v7/frontend" dev 

test:
	yarn --cwd "./snobird-v7/frontend" test

migrate:
	$(PYTHON) manage.py makemigrations ./snobird-v7/backend
	$(PYTHON) manage.py migrate ./snobird-v7/backend

run:
	$(PYTHON) manage.py runserver ./snobird-v7/backend

clean:
	$(PYTHON) manage.py  sqlflush ./snobird-v7/backend

admin:
	$(PYTHON) manage.py createsuperuser ./snobird-v7/backend
