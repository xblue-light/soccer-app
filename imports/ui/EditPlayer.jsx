import React, { Component } from 'react';

export default class Edit extends Component {

  showTeamStats() {
    this.props.showTeamStats();
  }

  editPlayer(event) {
    event.preventDefault();

    let player = {
      _id:               this.props.currentPlayer._id,
      selectGender:      this.refs.selectGender.value,
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

    // basically calls the updatePlayer() method
    // that is defined in the server/main.js
    // else if there is an error display the reason.
    Meteor.call('updatePlayer', player, (error) => {
      if(error) {
        alert("Oups something went wrong: " + error.reason);
      } else {
        alert("Player updated");
        // show me the stats because where still on the same page
        this.showTeamStats();
      }
    });
  }

  // render our lovely edit form
  // also add our editPlayer() function to the onSubmit() method
  // of our form and dont forget to bind this function
  // since we are using ES6
  render() {

    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.editPlayer.bind(this)} >

          <h3>Add a new player</h3>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Team"
                    ref="team"
                    type="text"
                    className="validate"
                    defaultValue={currentPlayer.team}>
              </input>
            </div>
            <div className="input-field col s6">
              <input placeholder="Name"
                    ref="name"
                    type="text"
                    className="validate"
                    defaultValue={currentPlayer.name}>
              </input>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h5>Ball Manipulation</h5>
              <select className="browser-default" ref="ballManipulation"
                      defaultValue={currentPlayer.ballManipulation}>
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Kicking Abilities</h5>
              <select className="browser-default" ref="kickingAbilities"
                      defaultValue={currentPlayer.kickingAbilities}>
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
              <select className="browser-default" ref="passingAbilities"
                      defaultValue={currentPlayer.passingAbilities}>
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Duel Tackling</h5>
              <select className="browser-default" ref="duelTackling"
                      defaultValue={currentPlayer.duelTackling}>
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
              <select className="browser-default" ref="fieldCoverage"
                      defaultValue={currentPlayer.fieldCoverage}>
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Blocking Abilities</h5>
              <select className="browser-default" ref="blockingAbilities"
                      defaultValue={currentPlayer.blockingAbilities}>
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
              <select className="browser-default" ref="gameStrategy"
                      defaultValue={currentPlayer.gameStrategy}>
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Skill acquired</option>
                <option value="0">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Playmaking Risks</h5>
              <select className="browser-default" ref="playmakingRisks"
                      defaultValue={currentPlayer.playmakingRisks}>
                <option value="0">0 - Hasnt demonstrated skills</option>
                <option value="0">1 - Needs improvement</option>
                <option value="0">2 - Skill acquired</option>
                <option value="0">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-text-area"
                        defaultValue={currentPlayer.notes}/>
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
//export default withRouter(New);
