import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Private Schools', 'Government Schools'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
  barChartData: ChartDataSets[] = [
    { data: [45, 37], label: 'Boys' },
    { data: [60, 70], label: 'Girls' }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
