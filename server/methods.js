import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';


// this file needs work since the method doesnt
// get picked up when used in {New} component
// however works fine when I add this insert method into /server/main.js
Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  }
});
