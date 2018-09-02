import { Component,  OnDestroy, OnInit } from '@angular/core';
import {Aphorism} from "./aphorism";

@Component({
  selector: 'app-aphorism',
  templateUrl: './aphorism.component.html',
  styleUrls: ['./aphorism.component.css']
})
export class AphorismComponent implements OnInit, OnDestroy {

  aphorism: Aphorism;

  waitingPeriod: number = 9;

  private timerId: number;

  private finishW: string;

  constructor() {
    this.aphorism = new Aphorism(
      'Благородный муж в душе безмятежен.',
    );

  }

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.waitingPeriod--;
      if (this.waitingPeriod < 5 && this.waitingPeriod  > 1) {
        this.finishW = "ы";
      }
      if (this.waitingPeriod == 1) {
        this.finishW = "у";
      }
      if (this.waitingPeriod == 0) {
        clearInterval(this.timerId);
      }
    }, 1000);

  }



  ngOnDestroy(): void {


  }

}
