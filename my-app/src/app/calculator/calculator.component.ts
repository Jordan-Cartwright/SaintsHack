import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  answer;
  expr = '';

  constructor() { }

  ngOnInit() {
  }

  evaluateExpression() {
    this.answer = 'You suck';
  }

  addToExpression(x) {
    this.expr += x;
  }

  changeExpression(event: any) {
    this.expr = event.target.value;
    console.log(this.expr);
  }
}
