# gvcooporg

Site Web www.gvcoop.org

Nouveau site [wagtail.org](https://wagtail.org) destiné à [www.gvcoop.org](https://www.gvcoop.org).

## Tailwind (erreur)

```bash
│ Error: Cannot apply unknown utility class `bg-brand-light`. Are you using CSS modules or similar and missing `@reference`? https://tailwindcss.com/docs/functions-and-directives#reference-directive
```


## Scripts d'installation

Les scripts sont dans les Makefile

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