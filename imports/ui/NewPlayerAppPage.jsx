import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';
import { Meteor } from 'meteor/meteor';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class NewPlayerAppPage extends Component {

  handleChange = (event, isInputChecked) => {
    this.props.onChange
      (
        event,
        isInputChecked,
        this.props.question
      );
  };

  submitPlayer(event) {
    event.preventDefault();

    // let player = {
    //   name:              this.refs.name.value,
    //   team:              this.refs.team.value,
    //   ballManipulation:  this.refs.ballManipulation.value,
    //   kickingAbilities:  this.refs.kickingAbilities.value,
    //   passingAbilities:  this.refs.passingAbilities.value,
    //   duelTackling:      this.refs.duelTackling.value,
    //   fieldCoverage:     this.refs.fieldCoverage.value,
    //   blockingAbilities: this.refs.blockingAbilities.value,
    //   gameStrategy:      this.refs.gameStrategy.value,
    //   playmakingRisks:   this.refs.playmakingRisks.value,
    //   notes:             this.refs.notes.value,
    //   createdAt:         new Date(),
    //   owner:             Meteor.userId(),
    // }

    // basically calls the insertPlayer() method
    // that is defined in the server/main.js
    // else if there is an error display the reason.
    Meteor.call('insertPlayer', player, (error) => {
      if(error) {
        alert("Oups something went wrong: " + error.reason);
      } else {
        alert("Player added");
        this.props.history.push('/');
      }
    });

  }

  // of our form and dont forget to bind this function
  // since we are using ES6
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h5>{this.props.question}</h5>

          <div className="row">
            <FormControl component="fieldset">
              <FormLabel component="legend">{this.props.question}</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      label={this.props.question}
                      value={this.props.question}
                      onChange={this.handleChange}
                    />
                  }
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </div>



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



        </form>
      </div>
    )
  }
}

// wrapping with router allows us
// to push our data to the home page..
export default withRouter(NewPlayerAppPage);
