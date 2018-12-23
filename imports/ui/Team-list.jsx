import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import { red500 } from 'material-ui/styles/colors';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
export default class TeamList extends Component {

  // create the function locally also updateCurrentPlayer()
  updateCurrentPlayer(player) {
    this.props.updateCurrentPlayer(player);
  }

  // call the deletePlayer() function
  deletePlayer(playerId) {
    // call the server method to delete
    Meteor.call('deletePlayer', playerId, (error) => {
      if(error) {
        alert("Oups something went wrong: " + error.reason);
      } else {
        console.log("Player deleted...");
      }
    });
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg"/>}

        // create a onClick attribute to trigger event that..
        // will update the currentPlayer
        // we are also passing the props of player object
        rightIcon={<ActionDeleteForever
                      hoverColor={red500}
                      // this icons takes an oclic event to
                      // remove the player..
                      onClick={this.deletePlayer.bind(this, this.props.player._id)}
                  />}
        // this onclick event updates our player
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
      />
    )
  }
}
