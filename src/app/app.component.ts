import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diseases-visual';
  randomData: number[] = this.generateRandomArray(25); // Generate random array of 5 numbers

  lineChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Patient'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Patients Data',
          data: this.randomData
        } as any
      ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: this.getRandomNumber(20, 99), color: '#eeeeee' },

          { name: 'HIV/AIDS', y: this.getRandomNumber(20, 99), color: '#393e46' },

          { name: 'EBOLA', y: this.getRandomNumber(20, 99), color: '#00adb5' },
          { name: 'DISPORA', y: this.getRandomNumber(20, 99), color: '#eeeeee' },
          { name: 'DIABETES', y: this.getRandomNumber(20, 99), color: '#506ef9' },
        ],
      },
    ],
  })

  generateRandomArray(length: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 100
    }
    return randomArray;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



}
