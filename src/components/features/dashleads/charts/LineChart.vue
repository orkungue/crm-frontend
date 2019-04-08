<template>
    <div id="applinechart">
      <v-card>
        <div id="content">
            <canvas ref="chart"></canvas>
        </div>

      </v-card>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'app',
  mounted() {
    var chart = this.$refs.chart
    var ctx = chart.getContext("2d")
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Grey", "Green", "Yellow"],
        datasets: [{
          label: '# of Votes',
          data: [112, 180, 203, 125, 192],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)'
          ], borderWidth: 1
        }]
      },options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
</script>

<style>
    #applinechart {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #applinechart #content {
        margin: auto;
        background-color: #FFFFFF;
    }
</style>
