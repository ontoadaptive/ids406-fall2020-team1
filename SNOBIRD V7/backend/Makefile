py  =  py3
help:
	@echo make migrate
	@echo make run
	@echo make clean
	@echo make admin

migrate:
	$(py) manage.py makemigrations
	$(py) manage.py migrate

run:
	$(py) manage.py runserver

clean:
	$(py) manage.py  sqlflush
admin:
	$(py) manage.py createsuperuser

