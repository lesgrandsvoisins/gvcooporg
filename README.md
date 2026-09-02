# gvcooporg

Site Web www.gvcoop.org

Nouveau site [wagtail.org](https://wagtail.org) destiné à [www.gvcoop.org](https://www.gvcoop.org).


Migrations : 

```
python -m venv .venv
source .venv/bin/activate
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Init :

```
python -m venv .venv
source .venv/bin/activate
pip install wagtail
cd www
pip install -r requirements.txt
pip install --upgrade pip
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```