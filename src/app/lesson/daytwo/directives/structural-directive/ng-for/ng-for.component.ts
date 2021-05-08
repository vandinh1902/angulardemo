import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  studentList=[
    {
      name: 'nguyen',
      age: '25'
    },
    {
      name: 'ngoc',
      age: '23'
    },
    {
      name: 'phat',
      age: '25'
    },
    {
      name: 'phat',
      age: '20'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
