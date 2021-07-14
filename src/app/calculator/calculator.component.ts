import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1= 0;
  number2= 0;
  ketqua = 0;
  giatripheptinh ="";
 

  tinhtoan(){
      switch(this.giatripheptinh){
        case "-":{
          this.ketqua = this.number1 - this.number2;
          break;
        }
        case "+":{
          this.ketqua = this.number1 + this.number2;
          break;
        }
        case "*":{
          this.ketqua = this.number1 * this.number2;
          break;
        }
        case "/":{
          this.ketqua = this.number1 / this.number2;
          break;
        }
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
