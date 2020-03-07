import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{person | json}}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'1.1-2'}}</h2>

    <h2>{{ 2 | percent }}
    <h2>{{ 0.21 | currency }}
    <h2>{{ 0.21 | currency: 'GBP' }}

    <h2>{{ date }}</h2>
    {{currentTime()}}

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Welcome to my site';
  public date;
  public person = {
    firstName: 'John',
    lastName: 'Doe'
  }
  constructor() { }

  ngOnInit(): void {
  }  
  currentTime() {
    setInterval(() => {
       this.date = new Date();
    }, 1000); 
  }

}
