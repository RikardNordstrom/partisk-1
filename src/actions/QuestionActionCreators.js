import Actions from "../constants/Actions";
import { apiCallbackTimeout } from "../constants/Common";

const QuestionActionCreators = {

  loadQuestions(context, {}, done) {
    context.service.read("questions", {}, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_QUESTIONS_SUCCESS, {
          questions: data
        });

        done();
      }

    );
  },

  loadQuestion(context, { title }, done) {
    context.service.read("question", { title }, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }
        context.dispatch(Actions.LOAD_QUESTION_SUCCESS, data);
        done();
      }

    );
  },

  starQuestion(context, data, done) {
    context.dispatch(Actions.QUESTION_STARRED, data);
    done();
  }
};

export default QuestionActionCreators;
