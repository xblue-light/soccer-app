import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';
import { Meteor } from 'meteor/meteor';

class New extends Component {
  submitPlayer(event) {
    event.preventDefault();

    let player = {
      name:              this.refs.name.value,
      team:              this.refs.team.value,
      ballManipulation:  this.refs.ballManipulation.value,
      kickingAbilities:  this.refs.kickingAbilities.value,
      passingAbilities:  this.refs.passingAbilities.value,
      duelTackling:      this.refs.duelTackling.value,
      fieldCoverage:     this.refs.fieldCoverage.value,
      blockingAbilities: this.refs.blockingAbilities.value,
      gameStrategy:      this.refs.gameStrategy.value,
      playmakingRisks:   this.refs.playmakingRisks.value,
      notes:             this.refs.notes.value,
      createdAt:         new Date(),
      owner:             Meteor.userId(),
    }

    // basically calls the insertPlayer() method
    // that is defined in the server/main.js
    // else if there is an error display the reason.
    Meteor.call('insertPlayer', player, (error) => {
      if(error) {
        alert("Oups something went wrong: " + error.reason);
      } else {
        alert("Player added");
        // after succesfully adding our player push to home page.
        this.props.history.push('/');
      }
    });
  }
  
  // render our lovely input form
  // also add our submitPlayer() function to the onSubmit() method
  // of our form and dont forget to bind this function
  // since we are using ES6
  render() {
    return (

      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h3>Add a new player</h3>

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
            <div className="col s6">
              <h5>Passing Abilities</h5>
              <select className="browser-default" ref="passingAbilities">
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>

            <div className="col s6">
              <h5>Duel Tackling</h5>
              <select className="browser-default" ref="duelTackling">
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Field Coverage</h5>
              <select className="browser-default" ref="fieldCoverage">
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>

            <div className="col s6">
              <h5>Blocking Abilities</h5>
              <select className="browser-default" ref="blockingAbilities">
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Game Strategy</h5>
              <select className="browser-default" ref="gameStrategy">
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Skill acquired</option>
                <option value="0">3 - Great skills/could teach</option>
              </select>
            </div>

            <div className="col s6">
              <h5>Playmaking Risks</h5>
              <select className="browser-default" ref="playmakingRisks">
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Skill acquired</option>
                <option value="0">3 - Great skills/could teach</option>
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

        </form>
      </div>

    )
  }
}

// wrapping with router allows us
// to push our data to the home page..
export default withRouter(New);
