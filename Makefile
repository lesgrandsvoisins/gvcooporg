runserver:
	make -C ./www runserver

migrations:
	make -C ./www migrations

init:
	python -m venv .venv
	.venv/bin/pip install wagtail
	.venv/bin/pip install -r requirements.txt
	.venv/bin/pip install --upgrade pip
	.venv/bin/python manage.py migrate
	.venv/bin/python manage.py createsuperuser

