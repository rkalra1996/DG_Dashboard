import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'shared-highcharts-donought',
  templateUrl: './highcharts-donought.component.html',
  styleUrls: ['./highcharts-donought.component.scss']
})
export class HighchartsDonoughtComponent implements OnInit, AfterViewInit {

  plotData: Array<object>;
  colorCodes = ['#f2bf5e', '#4bb0b8', '#536eb7'];
  @Input() chartID: string;
  @Input() set chartData(value: object) {
    this.modifyInput(value);
  }
  constructor() { }

  modifyInput(value) {
    if (Array.isArray(value)) {
      this.plotData = value.map((v: {label: string, value: string}, i) => {
        return {
          name: v.label,
          y: +v.value,
          color: this.colorCodes[i],
        };
      }, this);
      console.log('plot data looks like ', this.plotData);
    }
  }

  ngAfterViewInit() {
    this.renderChart(this.chartID);
  }

  renderChart(chartID) {
    highcharts.chart(chartID, {
      title: null,
      chart: {
        height: (9 / 13 * 100) + '%',
        type: 'pie',
      },
      credits: {
        enabled: false
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
      data: [...this.plotData
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
