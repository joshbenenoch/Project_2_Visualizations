var abbrev = [];
var minutes = [];
var points = [];
var position = [];
var team = [];
var games = [];
d3.json("/PlayerStats").then(function(data) {
      for (var i = 0; i < data.length; i++) {
            abbrev.push(data[i].Name);
            team.push(data[i].Team);
            position.push(data[i].Position);
			games.push(data[i].Games);
        	minutes.push(data[i].Minutes/games[i]);
            points.push(data[i].Points/games[i]);
			
       }
   });


var trace1 = {
    x: [minutes],
    y: [points],
    mode: 'markers',
    type: 'scatter',
    name: `${name}`,
    text: [`${team}`],
    marker: { size: 5 }
  };

  
  var data = [trace1];
  
  var layout = {
    title:'Player Points per Game vs Minutes per Game'
  };


Plotly.newPlot(data, layout);