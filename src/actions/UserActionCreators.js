import Actions from "../constants/Actions";
import { apiCallbackTimeout } from "../constants/Common";

const UserActionCreators = {

  loadUsers(context, {}, done) {
    context.service.read("users", {}, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_USERS_SUCCESS, {
          users: data
        });

        done();
      }

    );
  },

  loadParty(context, { name }, done) {
    context.service.read("user", { name }, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }
        context.dispatch(Actions.LOAD_USER_SUCCESS, data);
        done();
      }

    );
  }

};

export default UserActionCreators;
