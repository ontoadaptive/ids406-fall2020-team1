PYTHON  =  python3

help:
	@echo make migrate
	@echo make run
	@echo make clean
	@echo make admin
migrate:
	$(PYTHON) manage.py makemigrations 
	$(PYTHON) manage.py migrate 

run:
	$(PYTHON) manage.py runserver 

clean:
	$(PYTHON) manage.py  sqlflush .

admin:
	$(PYTHON) manage.py createsuperuser 