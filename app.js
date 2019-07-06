$(document).ready(function() {
  $.ajax({
    url: "http://localhost/tutorials/php-chartjs/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      var player = [];
      var score = [];
      var playerName = [];

      for (var i in data) {
        playerName.push(data[i].playerName);
        score.push(data[i].score);
      }

      Chart.defaults.global.defaultFontFamily = 'Lato';
      Chart.defaults.global.defaultFontSize = 20;
      Chart.defaults.global.defaultFontColor = '#E0E0E0';

      var chartData = {
        labels: playerName,
        datasets: [{
          label: 'Player Score',
          hoverBorderColor: 'rgba(200,200,200,1)',
          data: score,
          backgroundColor: [
            '#B71C1C',
            '#01579B',
            '#33691E',
            '#F57F17',
            '#FF6F00',
            '#880E4F',
            '#4A148C'
          ],
          borderWidth: 1,
          borderColor: 'black',
          hoverBorderWidth: 3,
          hoverBorderColor: 'white'
        }]
      };

      var ctx = document.getElementById('mycanvas').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: chartData,
        options:{
        	title: {
        		display: true,
        		text: 'Player Scores',
        		fontSize: 25,
        		fontColor: '#EEEEEE'
        	},
        	legend: {
        		display: true,
        		position: 'right',
        		fontSize: 15
        	},
        	scales: {
        		xAxes: [{
        			display: true,
        			gridLines: {
        				display: true,
        				color: 'gray'
        			},
        			scaleLabel: {
        				display: true,
        				labelString: 'Points'
        			}
        		}],
        		yAxes: [{
        			display: true,
        			gridLines: {
        				display: false,
        				color: 'gray'
        			},
        			scaleLabel: {
        				display: true,
        				labelString: 'Players'
        			}
        		}]
        	}
        }
      });
    },
    error: function(data) {
      console.log(data);
    }
  })
});