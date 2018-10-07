import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';
import { Meteor } from 'meteor/meteor';

class inputFields extends Component {
  constructor() {
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Team"
                ref="team"
                type="text"
                className="validate">
          </input>
        </div>

        <div className="input-field col s6">
          <input placeholder="Name"
                ref="name"
                type="text"
                className="validate">
          </input>
        </div>
      </div>

      <div className="row">
        <div className="col s6">
          <h5>Ball Manipulation</h5>
          <select className="browser-default" ref="ballManipulation">
            <option value="0">0 - Hasnt demonstrated skills</option>
            <option value="1">1 - Needs improvement</option>
            <option value="2">2 - Skill acquired</option>
            <option value="3">3 - Great skills/could teach</option>
          </select>
        </div>

        <div className="col s6">
          <h5>Kicking Abilities</h5>
          <select className="browser-default" ref="kickingAbilities">
            <option value="0">0 - Hasnt demonstrated skills</option>
            <option value="1">1 - Needs improvement</option>
            <option value="2">2 - Skill acquired</option>
            <option value="3">3 - Great skills/could teach</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <textarea placeholder="Notes" ref="notes" className="materialize-text-area" />
        </div>

        <div className="input-field col s6">
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
  }
}
