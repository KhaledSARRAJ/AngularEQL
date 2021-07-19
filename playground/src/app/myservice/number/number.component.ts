import { Component, OnInit } from '@angular/core';
import {NumberService} from "../number.service";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
numbers!: number[];
  constructor(private _numberService: NumberService) { }

  ngOnInit(): void {
    this._numberService
      .getFirstFiveNumber()
      .subscribe(num => this.numbers=num, err => console.log(err),()=> console.log('fin traitement'));
  }

}
