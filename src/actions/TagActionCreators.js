import Actions from "../constants/Actions";
import { apiCallbackTimeout } from "../constants/Common";

const TagActionCreators = {
  loadTags(context, {}, done) {
    context.service.read("tags", {}, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_TAGS_SUCCESS, {
          tags: data
        });
        done();
      }
    );
  },

  loadTag(context, { name }, done) {
    context.service.read("tag", { name }, { timeout: apiCallbackTimeout },
      (err, data) => {
        if (err) {
          return done(err);
        }

        context.dispatch(Actions.LOAD_TAG_SUCCESS, data);
        done();
      }
    );
  }
};

export default TagActionCreators;
