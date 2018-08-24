import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Aphorism} from "./aphorism";

@Component({
  selector: 'app-aphorism',
  templateUrl: './aphorism.component.html',
  styleUrls: ['./aphorism.component.css']
})
export class AphorismComponent implements OnInit, OnDestroy {

  aphorism: string;

  waitingPeriod: number = 9;

  private timerId: number;

  finishW: string = "";

  constructor() {
    this.aphorism = "Благородный муж в душе безмятежен.";
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
        document.getElementById("aphorism").classList.add("start_aphorism");
        document.getElementById("mesage").classList.add("aphorism_timer_hidden");
      }
    }, 1000);

  }



  ngOnDestroy(): void {


  }

}
