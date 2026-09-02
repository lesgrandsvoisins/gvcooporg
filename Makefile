init: 
	python -m venv .venv
	source .venv/bin/activate
	pip install wagtail
	cd www
	pip install -r requirements.txt
	pip install --upgrade pip
	python manage.py migrate
	python manage.py createsuperuser
