/***
 * @array dataColorsBlue - Array of colors for donut chart.
 * @array couponBreakdownChartData - Array of objects containing data for donut highchart.
 */
const dataColorsBlue = ["#0E003C", "#1c1880", "#1d2d96", "#1f4cab", "#1f4cab", "#308bc4", "#3dabcb", "#3dabcb", "#7ddcdc", "#7ddcdc"];
const dataColorsGreen = ["#081F1C", "#125131", "#167633", "#21A235", "#36BA39", "#54C53C", "#78CB42", "#9CD353", "#C2E576", "#E7F4B8"];

const couponBreakdownChartData = [
  {
    y: 51.7,
    name: "0 %",
    color: dataColorsGreen[0]
  },
  {
    y: 8.28,
    name: "0-2 %",
    color: dataColorsGreen[1]
  },
  {
    y: 32.79,
    name: "2-4 %",
    color: dataColorsGreen[2]
  },
  {
    y: 5.85,
    name: "4-6 %",
    color: dataColorsGreen[3]
  },
  {
    y: 1.37,
    name: "6-8 %",
    color: dataColorsGreen[4]
  },
  {
    y: 0.01,
    name: "8-10 %",
    color: dataColorsGreen[5]
  },
  {
    y: 0,
    name: ">10 %",
    color: dataColorsGreen[6]
  },
];



document.addEventListener('DOMContentLoaded', function () {
  /***
   * On document load, donut chart is generated from `couponBreakdownChartData`.
   */
  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 355,
      height: 355,
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
      innerSize: '75%',
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
   based on the 'dataColorsGreen' array.
   */
  const htmlElement = document.querySelector("html");
  for (let i = 0; i <= dataColorsGreen.length; i++) {
    htmlElement.style.setProperty(`--category-circle-icon-${i}`, dataColorsGreen[i]);
  }
});