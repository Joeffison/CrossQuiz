from rest_framework import serializers

from quiz.models import Quiz, Question, Answer
from shared import Field


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = (Field.ANSWER, Field.ANSWER_IS_CORRECT)

    def create(self, validated_data):
        return Answer.manager.create(validated_data)


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = (Field.QUESTION, Field.QUIZ_ANSWERS)

    def create(self, validated_data):
        return Question.manager.create(validated_data)


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = (Field.NAME, Field.QUIZ_QUESTIONS)

    def create(self, validated_data):
        return Quiz.manager.create(validated_data)
