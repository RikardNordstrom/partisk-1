import {Map} from "immutable";
import { getParties } from "../utils/APIUtils";
import Party from "../models/Party";

let Settings = {
  name: "settings",

  setEnabledPartiesDefault(req, res, done) {
    getParties({}, {}, function (err, parties) {
      var enabledParties = new Map();

      parties.forEach(function (partyData) {
        var party = Party.fromData(partyData);
        var isPartyEnabled = party.result.EU > 1 || party.result.parliment > 1;
        enabledParties = enabledParties.set(party.id, isPartyEnabled);
      });

      req.res.cookie('enabledParties', enabledParties.toObject());

      setTimeout(function () {
        done(null, req.res.cookie);
      }, 10);
    });
  },

  read(req, res, { questionId, partyId }, config, done) {
    let cookie = {};

    if (req.cookies) {
      if (req.cookies.favourites) {
        try {
          cookie.favourites = new Map(req.cookies.favourites);
        } catch (err) {
          req.res.cookie('favourites', null);
        }
      }

      if (req.cookies.enabledParties) {
        try {
          cookie.enabledParties = new Map(req.cookies.enabledParties);
          done(null, cookie);
        } catch (err) {
          Settings.setEnabledPartiesDefault(req, res, done);
        }
      } else {
        Settings.setEnabledPartiesDefault(req, res, done);
      }
    }
  }
};

export default Settings;
