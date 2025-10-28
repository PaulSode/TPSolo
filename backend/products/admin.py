from django.contrib import admin
from .models import Category, Product

# Pour un affichage simple
admin.site.register(Category)
admin.site.register(Product)