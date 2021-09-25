import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-socialsecurity',
  templateUrl: './socialsecurity.component.html',
  styleUrls: ['./socialsecurity.component.scss']
})
export class SocialsecurityComponent {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75,77,75,78,72,85,72], label: 'Criminal Complaints', fill: false },
    { data: [10, 20, 30, 40, 50, 60,70,85,98,52,45,62], label: 'Domestic Complaints', fill: false },
    { data: [15, 22, 48, 35, 27, 55,67,75,68,52,45,32], label: 'Industry Complaints', fill: false },
  ];
  

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];
  lineChartOptions = {
    responsive: true,
  };
 
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
 
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


}


