import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {
  doughnutPieChartData = [
    {
      data: [30, 40, 30, 50, 70],
    }
  ];

  doughnutPieChartLabels = ["Direct Taxes", "Indirect Taxes", "Rentals","Penalties ","Investments"];

  doughnutPieChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  doughnutPieChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(50, 106, 76, 0.2)',
        'rgba(75, 206, 66, 0.2)',
      ],
      
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
