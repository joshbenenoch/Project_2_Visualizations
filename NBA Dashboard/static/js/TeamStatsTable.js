var team = [];
var abbrev = [];
var wins = [];
var loss = [];
var games = [];
var points = [];
var rebounds = [];
var assists = [];
var blocks = [];
var steals = [];
var turnovers = []
var fieldgoal = [];
var twopt = [];
var threept = [];
var fantasy =[];

d3.json("/TeamStats").then(function(data) {
      for (var i = 0; i < data.length; i++) {
            team.push(data[i].Name);
            abbrev.push(data[i].Team);
            wins.push(data[i].Wins);
            loss.push(data[i].Losses);
            games.push(data[i].Games);
        	  points.push(data[i].Points/games[i]);
            rebounds.push(data[i].Rebounds/games[i]);
            assists.push(data[i].Assists/games[i]);
            blocks.push(data[i].BlockedShots/games[i]);
            steals.push(data[i].Steals/games[i]);
            turnovers.push(data[i].Turnovers/games[i]);
            fieldgoal.push(data[i].FieldGoalsPercentage);
            twopt.push(data[i].TwoPointersPercentage);
            threept.push(data[i].ThreePointersPercentage);
            fantasy.push(data[i].FantasyPoints);
			
       }
   });
  

    //Table

    var values = [team,wins,loss,points,rebounds,assists,blocks,steals,turnovers,fieldgoal,twopt,threept,fantasy]

    var headerColor = "grey";
    var rowEvenColor = "lightgrey";
    var rowOddColor = "white";

    var plotdata = [{
    type: 'table',
    header: {
      values: [["<b>TEAM</b>"],["<b>WINS</b>"],["<b>LOSSES</b>"], ["<b>POINTS/GM/b>"],["<b>REBOUNDS/GM</b>"],["<b>ASSISTS/GM</b>"],["<b>BLOCKS/GM</b>"],
      ["<b>STEALS/GM</b>"],["<b>TURNOVERS</b>"], ["<b>FG %</b>"],["<b>2PT %</b>"],["<b>3PT %</b>"],["<b>FANTASY VALUE</b>"]],
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: headerColor},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: values,
      align: "center",
      line: {color: "black", width: 1},
      fill: {color: [[rowOddColor,rowEvenColor,rowOddColor,
						    rowEvenColor,rowOddColor]]},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
}]

Plotly.plot('graph', data);