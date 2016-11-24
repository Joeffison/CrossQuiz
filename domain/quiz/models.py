from audit_log.models.managers import AuditLog
from django.db import models
from django.db import transaction

from quiz.exceptions import UniqueFieldQuestionError, UniqueFieldQuizNameError
from shared import Field


########
# Quiz #
########

class QuizManager(models.Manager):

    @transaction.atomic
    def create(self, data):
        self.validate_unique_name(None, name=data[Field.NAME])
        questions_data = data.pop(Field.QUIZ_QUESTIONS)

        quiz = super(QuizManager, self).create(**data)
        Question.manager.create_quiz_questions(quiz, questions_data)
        return quiz

    def validate_unique_name(self, quiz, **field):
        try:
            quiz_found = Quiz.manager.get(**field)
            if quiz != quiz_found:
                raise UniqueFieldQuizNameError(field.keys()[0])
        except Quiz.DoesNotExist:
            pass
        return quiz


class Quiz(models.Model):
    name = models.CharField(max_length=254, null=False, blank=False)

    audit_log = AuditLog()
    manager = QuizManager()


################
# Question #
################

class QuestionManager(models.Manager):
    # @transaction.atomic
    # def create(self, quiz, data):
    #     self.validate_unique_question(None, name=data[Field.QUESTION])
    #     answer_data = data.pop(Field.QUIZ_ANSWERS)
    #
    #     question = super(QuestionManager, self).create(**data)
    #     Answer.manager.create_quiz_answers(question, answer_data)
    #     return question

    @transaction.atomic
    def create_quiz_questions(self, quiz, data):
        for question in data:
            answer_data = question.pop(Field.QUIZ_ANSWERS)

            q = self.create(quiz=quiz, **question)
            Answer.manager.create_quiz_answers(q, answer_data)

    def validate_unique_question(self, question, **field):
        try:
            question_found = Question.manager.get(**field)
            if question != question_found:
                raise UniqueFieldQuestionError(field.keys()[0])
        except Question.DoesNotExist:
            pass
        return question


class Question(models.Model):
    question = models.CharField(max_length=254, null=False, blank=False)
    quiz = models.ForeignKey(Quiz, related_name=Field.QUIZ_QUESTIONS, null=False, blank=False)

    audit_log = AuditLog()

    manager = QuestionManager()


##############
# Answer #
##############
class AnswerManager(models.Manager):
    @transaction.atomic
    def create_quiz_answers(self, question, data):
        for answer in data:
            Answer.manager.create(question=question, **answer)


class Answer(models.Model):
    answer = models.CharField(max_length=254, null=False, blank=False)
    question = models.ForeignKey(Question, related_name=Field.QUIZ_ANSWERS, null=False, blank=False)
    is_correct = models.BooleanField(null=False, blank=False, default=False)

    audit_log = AuditLog()

    manager = AnswerManager()
