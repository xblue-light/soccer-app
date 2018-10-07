import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Players = new Mongo.Collection('players');

// define set of rules to prevent our client..
// from doing anything descructive to our database
// Players.allow({
//   insert() { return false },
//   update() { return false },
//   remove() { return false }
// });
//
// Players.deny({
//   insert() { return true },
//   update() { return true },
//   remove() { return true }
// })

// define our database schema ..
// this is where we can define our data types, default values etc.
const PlayerSchema = new SimpleSchema({
  selectGender:      { type: String },
  name:              { type: String },
  team:              { type: String },
  ballManipulation:  { type: Number, defaultValue: 0 },
  kickingAbilities:  { type: Number, defaultValue: 0 },
  passingAbilities:  { type: Number, defaultValue: 0 },
  duelTackling:      { type: Number, defaultValue: 0 },
  fieldCoverage:     { type: Number, defaultValue: 0 },
  blockingAbilities: { type: Number, defaultValue: 0 },
  gameStrategy:      { type: Number, defaultValue: 0 },
  playmakingRisks:   { type: Number, defaultValue: 0 },
  notes:             { type: String, optional: true },
  owner:             { type: String },
});

// attach the schema
Players.attachSchema(PlayerSchema);
