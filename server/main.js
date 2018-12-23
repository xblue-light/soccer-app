import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('players', function() {
    return Players.find({});
  })
});



Meteor.methods({

  // insert function for DB
  insertPlayer(player) {
    Players.insert(player);
  },

  // update function
  updatePlayer(player) {
    // call the collection and then update the player id
    Players.update(player._id,
    // set that player id with the player we passed
    { $set: player });
  },

  deletePlayer(playerId) {
    Players.remove(playerId);
  }

});
