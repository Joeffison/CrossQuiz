from rest_framework import status
from rest_framework.exceptions import ValidationError


class UniqueFieldQuestionError(ValidationError):
    def __init__(self, question):
        detail = 'This question already exists.'

        super(UniqueFieldQuestionError, self).__init__(detail)
        self.status_code = status.HTTP_400_BAD_REQUEST


class UniqueFieldQuizNameError(ValidationError):
    def __init__(self, question):
        detail = 'There is already a ce_quiz with this name.'

        super(UniqueFieldQuizNameError, self).__init__(detail)
        self.status_code = status.HTTP_400_BAD_REQUEST
