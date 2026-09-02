from django.db import models

from wagtail.models import Page

from wagtail.fields import RichTextField
from wagtail.search import index
from wagtail.admin.panels import FieldPanel, MultiFieldPanel, InlinePanel

class HomePage(Page):
    pass

# Ajouté par Chris
class ContentPage(Page):
    
    body = RichTextField(null=True)

    search_fields = Page.search_fields + [
        index.SearchField("body"),
    ]
    
    content_panels = Page.content_panels + [
        FieldPanel("body"),
    ]
