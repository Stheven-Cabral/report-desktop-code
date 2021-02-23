// Try to mockup data for easier integration.
const dataColors = ["#00366d", "#114b82", "#286097", "#3c76ae", "#538bc2", "#95c1ec", "#bfdbf8"];

const donutChartData = [
  {
    y: 51.7,
    name: "0 %",
    color: dataColors[0]
  },
  {
    y: 8.28,
    name: "0-2 %",
    color: dataColors[1]
  },
  {
    y: 32.79,
    name: "2-4 %",
    color: dataColors[2]
  },
  {
    y: 5.85,
    name: "4-6 %",
    color: dataColors[3]
  },
  {
    y: 1.37,
    name: "6-8 %",
    color: dataColors[4]
  },
  {
    y: 0.01,
    name: "8-10 %",
    color: dataColors[5]
  },
  {
    y: 0,
    name: ">10 %",
    color: dataColors[6]
  },
];

// Chart with Legend
// Create legend if needed

// Create table. Does highcharts have table feature?

// Create Pie Chart
document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 300,
      height: 300,
      margin: [0, 0, 0, 0]
      // events: {
      //   load: function() {
      //     this.viewData()
      //   }
      // }
    },
    title: {
      text: null
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        },
        center: ['50%', '50%'],
        size: '100%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Coupon Breakdown',
      innerSize: '75%',
      data: donutChartData
    }],
    exporting: {
      showTable: true
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });

  // Assign ID's to Elements
  const highChartsDataTable = document.querySelector("#coupon-breakdown-section-chart .highcharts-data-table");
  highChartsDataTable.setAttribute('id', "coupon-breakdown-highcharts-data-table");
});


