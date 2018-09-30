import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

export default class TeamStats extends Component {
  render() {
    const players    = this.props.players;
    const numPlayers = players.length;

    // calculation algorithm
    // const team = get a total for ballManipulation
    // const possible = 3 * numPlayers
    // team divide by possible(potential)

    const ballManipulation = Math.round((players.reduce((ballManipulation, player)   => {
      return ballManipulation + player.ballManipulation;
    },
    0) / ( 3 * numPlayers )) * 100);

    const kickingAbilities = Math.round((players.reduce((kickingAbilities, player)   => {
      return kickingAbilities + player.kickingAbilities;
    }, 0) / ( 3 * numPlayers )) * 100);

    const passingAbilities = Math.round((players.reduce((passingAbilities, player)   => {
      return passingAbilities + player.passingAbilities;
    }, 0) / ( 3 * numPlayers )) * 100);

    const duelTackling = Math.round((players.reduce((duelTackling, player)           => {
      return duelTackling + player.duelTackling;
    }, 0) / ( 3 * numPlayers )) * 100);

    const fieldCoverage = Math.round((players.reduce((fieldCoverage, player)         => {
      return fieldCoverage + player.fieldCoverage;
    }, 0) / ( 3 * numPlayers )) * 100);

    const blockingAbilities = Math.round((players.reduce((blockingAbilities, player) => {
      return blockingAbilities + player.blockingAbilities;
    }, 0) / ( 3 * numPlayers )) * 100);

    const gameStrategy = Math.round((players.reduce((gameStrategy, player)           => {
      return gameStrategy + player.gameStrategy;
    }, 0) / ( 3 * numPlayers )) * 100);

    const playmakingRisks = Math.round((players.reduce((playmakingRisks, player)     => {
      return playmakingRisks + player.playmakingRisks;
    }, 0) / ( 3 * numPlayers )) * 100);

    //calculate the defense stats..
    //then divide the total amount of stats
    const defense = Math.round((duelTackling      +
                                fieldCoverage     +
                                blockingAbilities +
                                gameStrategy      +
                                playmakingRisks)/5 || 0);

    const offense = Math.round((kickingAbilities +
                                ballManipulation +
                                passingAbilities +
                                fieldCoverage    +
                                gameStrategy     +
                                playmakingRisks)/6 || 0);

    // wrap in math.round() and calculate the total of stats
    const total   = Math.round((kickingAbilities +
                                ballManipulation +
                                passingAbilities +
                                fieldCoverage    +
                                gameStrategy     +
                                playmakingRisks  +
                                duelTackling     +
                                blockingAbilities)/8 || 0);

    // data object for react chartjs
    const data = {
      labels: [
        'Ball Manipulation',
        'Kicking',
        'Passing',
        'Duel/Tackling',
        'Field Coverage',
        'Blocking',
        'Strategy',
        'Risks'
      ],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [
            ballManipulation,
            kickingAbilities,
            passingAbilities,
            duelTackling,
            fieldCoverage,
            blockingAbilities,
            gameStrategy,
            playmakingRisks
          ]
        }
      ]
    };

    return (
      <div>
        <h2>Team Stats</h2>
        <div className="row">
          <div className="col s12 m7">
            <Radar
              data={data}
              width={500}
              height={500}
              option={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className="col s12 m5">
            <h4>Scores in % of max possible</h4>
            <Divider />
              <p>Teams offense: {offense}%</p>
              <p>Teams defense: {defense}%</p>
              <p>Teams total: {total}%</p>
            <Divider />
            <p>Total players: {numPlayers}</p>
          </div>
        </div>
      </div>
    )
  }// ends render()
}// ends {TeamStats}
