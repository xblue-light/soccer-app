import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
// database collection
import { Players } from '../api/players';
// import our components
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';
import Edit from './EditPlayer';

// set a temporary data object
const tempPlayer = {
  name:               "Temp Player",
  team:               "Genesis",
  ballManipulation:   1,
  kickingAbilities:   0,
  passingAbilities:   0,
  duelTackling:       2,
  fieldCoverage:      1,
  blockingAbilities:  1,
  gameStrategy:       1,
  playmakingRisks:    2,
  notes:              "This player basically sucks",
}

export class App extends Component {

  constructor(props) {
    super(props);
    // setting up the state
    this.state = {
      currentPlayer: tempPlayer,
      showEditPlayer: false,
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm        = this.showEditForm.bind(this);
    this.showTeamStats       = this.showTeamStats.bind(this);
  }

  // passing the object of players which come from MongoDB
  // into the map() method..
  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id}
                player={player}
                // we are passing our function into the component TeamList
                updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  // This func will update the state above..
  // with whatever we click on one of the Players
  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  // change our state for the show edit player
  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false,
    });
  }

  showForm() {
    if(this.state.showEditPlayer === true) {
      return (
        <Edit currentPlayer={this.state.currentPlayer}
              showTeamStats={this.showTeamStats}
        />
      );
    }
    else {
      return (
        <TeamStats players={this.props.players}/>
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar title="Soccer Application"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                  showMenuIconButton={false}>
            <AccountsWrapper/>
          </AppBar>
          <div className="row">
            <div className="col s12 m7">
              <Player player={this.state.currentPlayer} showEditForm={this.showEditForm} />
            </div>
            <div className="col s12 m5">
              <h2>Team List</h2>
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
              <br/>
              <Link to="/new" className="waves-effect waves-light btn">Add Player</Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <br/>
              <Divider />
              {this.showForm()}
              <Divider />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propsTypes = {
  players: PropTypes.array.isRequired,
};

// subscribe to the collection publish from the actual server
export default createContainer(() => {
  Meteor.subscribe('players');
  // use the variable and return only the players that are from this owner
  const user = Meteor.userId();

  // This is actually where we are setting up the state then..
  // Return whatever kind of data we are getting
  // from Mongo inside our state then we find it
  return {
    // passing it as props to the App component.
    // by adding 'owner: user' in the find({}) we display players on for that account.
    players: Players.find({ owner: user }, {sort: { name:1 }}).fetch(),
  };
}, App);
