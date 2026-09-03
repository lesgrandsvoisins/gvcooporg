from .base import *

DEBUG = False

# ManifestStaticFilesStorage is recommended in production, to prevent
# outdated JavaScript / CSS assets being served from cache
# (e.g. after a Wagtail upgrade).
# See https://docs.djangoproject.com/en/6.1/ref/contrib/staticfiles/#manifeststaticfilesstorage
STORAGES["staticfiles"]["BACKEND"] = "django.contrib.staticfiles.storage.ManifestStaticFilesStorage"

ALLOWED_HOSTS = ['www.gvcoop.org', '://www.gvcoop.org', 'gvcoop.org', '://gvcoop.org', '192.168.122.2', '192.168.122.1', '127.0.0.1', 'localhost']

STATIC_ROOT = "/var/www/wagtailgvcoop/static"
MEDIA_ROOT = "/var/www/wagtailgvcoop/media"

try:
    from .local import *
except ImportError:
    pass
