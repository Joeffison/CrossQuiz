from rest_framework import filters
from rest_framework import viewsets

from quiz.models import Quiz
from quiz.serializers import QuizSerializer


class QuizViewSet(viewsets.ModelViewSet):

    queryset = Quiz.manager.all()
    serializer_class = QuizSerializer
    http_method_names = ['get', 'post', 'put', 'patch']
    filter_backends = (filters.DjangoFilterBackend,)
