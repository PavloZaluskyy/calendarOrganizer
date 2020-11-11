import { Component, OnInit } from '@angular/core';
import { Week } from '../shared/interface/week';
import { DateService } from '../shared/date.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Week[]
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this))
  }
  generate(now: moment.Moment){
    
    now.locale('uk');
    const startDay = now.clone().startOf('month').startOf('week').isoWeekday(1)
    const endDay = now.clone().endOf('month').endOf('week').isoWeekday(1)

    const date = startDay.clone().subtract(1, 'day')
    const calendar = []
  
    while(date.isBefore(endDay, 'day')){
      calendar.push({
        days: Array(7).fill(0).map(()=>{
          const value = date.add(1, 'day').clone()
          const active = moment().isSame(value, 'date')
          const disabled = !now.isSame(value, 'month')
          const selected = now.isSame(value, 'date')
          return {
            value, active, disabled, selected
          }
        })
      })
    }
    this.calendar = calendar
  }
  select(day: moment.Moment){
    this.dateService.changeDate(day)
  }
}
