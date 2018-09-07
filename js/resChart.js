var ctx = document.getElementById("resChart");
var resChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: "Residential Service Fees",
        backgroundColor: ["#FCEE21", "#FBB03B", "#F7931E", "#F15A24"],
        data: [10.25, 15.00, 20.00, 25.00]
      }
    ]
  },
  options: {
    animation: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          fontSize: 12,
          fontColor: '#000',
          beginAtZero: true,
          // This works, save for later
          //callback: function (value, index, values) {
          //  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
          //}
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return '$' + value;
            }
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
