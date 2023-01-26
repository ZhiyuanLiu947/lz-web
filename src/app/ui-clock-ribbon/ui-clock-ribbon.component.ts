import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-clock-ribbon',
  templateUrl: './ui-clock-ribbon.component.html',
  styleUrls: ['./ui-clock-ribbon.component.css']
})
export class UiClockRibbonComponent implements OnInit{

    intervalId : any;
    secondDegree : any;
    minuteDegree : any;
    hourDegree : any;

    ngOnInit(){
        this.timeNow();
        this.intervalId = setInterval(
            () =>{
                this.timeNow();
            }, 1000);
    }

    timeNow(){
        var date = new Date();
        var secondNow = date.getSeconds();
        var minuteNow = date.getMinutes() + secondNow/60;
        var hourNow = date.getHours() + minuteNow/60;
        // console.log(hourNow, minuteNow, secondNow);

        this.secondDegree = secondNow*6;
        this.minuteDegree = minuteNow*6;
        this.hourDegree = hourNow*30;
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}
