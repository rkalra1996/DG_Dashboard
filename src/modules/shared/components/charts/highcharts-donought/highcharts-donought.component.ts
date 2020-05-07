import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'shared-highcharts-donought',
  templateUrl: './highcharts-donought.component.html',
  styleUrls: ['./highcharts-donought.component.scss']
})
export class HighchartsDonoughtComponent implements OnInit {

  plotData: Array<object>;
  chartID: string;
  @Input() set chartData(value: object) {
    if (Array.isArray(value['data'])) {
      console.log('recieved data in plot', value);
      this.plotData = value['data'].map((v: {label: string, value: string}) => {
        return {
          name: v.label,
          y: +v.value
        };
      });
      // render the chart
      this.chartID = 'donut-chart-container_' + value['id'];
      this.renderChart(this.chartID);
    }
  }
  constructor() { }

  renderChart(chartID) {
    highcharts.chart(chartID, {
      title: null,
      chart: {
        type: 'pie',
      },
      plotOptions: {
        pie: {
          shadow: false,
        }
      },
      tooltip: {
        valueSuffix: 'hello',
        formatter: (val) => {
            return '<b>' + val['chart']['hoverPoint'].name + '</b>: ' + val['chart']['hoverPoint'].percentage + ' %';
        }
    },
    series: [{
      type: 'pie',
      name: 'Feedback',
      data: [{
        name: 'sample 1',
        y: 40,
        color: '#f2bf5e'
      },
      {
        name: 'sample 2',
        y: 40,
        color: '#4bb0b8',
      },
      {
        name: 'sample 3',
        y: 20,
        color: '#536eb7'
      }
      ],
      size: '100%',
      innerSize: '40%',
      showInLegend: false,
      dataLabels: {
          enabled: false
      }
    }],
    });
  }

  ngOnInit() {
  }

}
