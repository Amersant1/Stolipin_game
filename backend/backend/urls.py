from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', FrontendAppView.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)