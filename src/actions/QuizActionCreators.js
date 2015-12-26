import Actions from "../constants/Actions";
import { apiCallbackTimeout } from "../constants/Common";

const QuizActionCreators = {
  loadQuizzes(context, {}, done) {
    context.service.read("quizzes", {}, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_QUIZZES_SUCCESS, {
          quizzes: data
        });
        done();
      }
    );
  },

  loadQuiz(context, { name }, done) {
    context.service.read("quiz", { name }, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_QUIZ_SUCCESS, data);
        done();
      }
    );
  }
};

export default QuizActionCreators;
