import Actions from "../constants/Actions";
import { apiCallbackTimeout } from "../constants/Common";

const PartyActionCreators = {
  loadParties(context, {}, done) {
    context.service.read("parties", {}, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_PARTIES_SUCCESS, {
          parties: data
        });
        done();
      }

    );
  },

  loadParty(context, { name }, done) {
    context.service.read("party", { name }, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_PARTY_SUCCESS, data);
        done();
      }
    );
  }
};

export default PartyActionCreators;
