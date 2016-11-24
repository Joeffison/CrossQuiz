from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from quiz.views import QuizViewSet

QUIZ = "quiz"

router = DefaultRouter()
router.register(r'quiz', QuizViewSet, base_name=QUIZ)

urlpatterns = [
    url(r'^', include(router.urls)),
]
