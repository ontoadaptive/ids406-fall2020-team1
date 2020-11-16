help:
	@echo make makemigrations
	@echo make migrate
	@echo make shell
	@echo make run
	@echo ""
	@echo make run-loader
	@echo make run-add-beta-bps
	@echo make run-proc-oop-fps

makemigrations:
	python3 manage.py makemigrations

migrate:
	python3 manage.py migrate

shell:
	python3 manage.py shell

run:
	python3 manage.py runserver

run-loader:
	python3 loader.py

run-add-beta-bps:
	python add_beta_bps.py	

run-proc-oop-fp:
	python proc_oop_fp.py
