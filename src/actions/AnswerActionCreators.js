import Actions from "../constants/Actions";
import { apiCallbackTimeout } from "../constants/Common";

const AnswerActionCreators = {

  loadAnswers(context, {}, done) {
    context.service.read("answers", {}, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_ANSWERS_SUCCESS, {
          answers: data
        });

        done();
      }

    );
  },

  loadAnswer(context, { questionId, partyId }, done) {
    context.service.read("answer", { questionId, partyId }, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }
        context.dispatch(Actions.LOAD_ANSWER_SUCCESS, data);
        done();
      }

    );
  }

};

export default AnswerActionCreators;
