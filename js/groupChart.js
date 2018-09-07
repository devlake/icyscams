//new Chart(document.getElementById("res-sb-chart"), {
var ctx = document.getElementById("groupChart");
var reschart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: "Residential Rate",
        backgroundColor: "#3e95cd",
        data: [10.25, 15, 20, 25]
      }, {
        label: "Small Business Rate",
        backgroundColor: "#8e5ea2",
        data: [13.53, 18, 23, 28]
      }
    ]
  },
  options: {
    animation: false,
    legend: {
      labels: {
        fontColor: '#000',
        fontSize: 12
      }
    },
    title: {
      display: true,
      fontColor: '#000',
      fontSize: 24,
      text: 'Service Charge (dollars)'
    },
    scales: {
      yAxes: [{
        ticks: {
          fontSize: 12,
          fontColor: '#000',
          beginAtZero: true,
          // This works, save for later
          callback: function (value, index, values) {
            return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
          }
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 12,
          fontColor: '#000'
        }
      }]
    },
    tooltips: {
      titleFontSize: 12,
      bodyFontSize: 12,
      callbacks: {
        label: function (t, d) {
          var xLabel = d.datasets[t.datasetIndex].label;
          var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
          return xLabel + ': ' + yLabel;
        }
      }
    }
  }
});
