/***
 * @array colorsAllBlue - Blue array of colors for data.
 * @array colorsAllBlue - Blue array of colors for data.
 * @array colorsAllBlue - Blue array of colors for data.
 * @array couponBreakdownChartData - Array of objects containing data for donut highchart.
 */
const colorsAllGreen = ['#54c53c', '#21a235', '#9cd353', '#125131', '#e7f4b8', '#36ba39', '#78cb42', '#167633', '#c2e576', '#081f1c'];
const colorsAllBlue = ['#308bc4', '#1f4cab', '#51c7d2', '#1c1880', '#b8f0e5', '#266aba', '#3dabcb', '#1d2d96', '#51c7d2', '#0e003c'];
const colorsMixedBlueGreen = ['#2a8bb0', '#76bf64', '#1a419e', '#c2e576', '#0e003c', '#4ba68f', '#1a69b1', '#9cd353', '#1b2085', '#e7f4b8', '#167633'];

const couponBreakdownChartData = [
  {
    y: 51.7,
    name: "0 %"
  },
  {
    y: 8.28,
    name: "0-2 %"
  },
  {
    y: 32.79,
    name: "2-4 %"
  },
  {
    y: 5.85,
    name: "4-6 %"
  },
  {
    y: 1.37,
    name: "6-8 %"
  },
  {
    y: 0.01,
    name: "8-10 %"
  },
  {
    y: 0,
    name: ">10 %"
  }
];


document.addEventListener('DOMContentLoaded', function () {
  /***
   * On document load, donut chart is generated from `couponBreakdownChartData`.
   */
  Highcharts.chart('container', {
    colors: colorsAllGreen,
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 350,
      height: 350,
      margin: [0, 0, 0, 0]
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
      innerSize: '65%',
      data: couponBreakdownChartData
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

  /***
   * On document load, the following id assignments are run.
   */
  const highChartsDataTable = document.querySelector("#coupon-breakdown-section-chart .highcharts-data-table");
  highChartsDataTable.setAttribute('id', "coupon-breakdown-highcharts-data-table");

  /***
   * On document load, the circle icon colors in the 'Coupon Breakdown' table are assigned
   based on the 'colorsAllGreen' array.
   */
  const htmlElement = document.querySelector("html");
  for (let i = 0; i <= colorsAllGreen.length; i++) {
    htmlElement.style.setProperty(`--category-circle-icon-${i}`, colorsAllGreen[i]);
  }
});