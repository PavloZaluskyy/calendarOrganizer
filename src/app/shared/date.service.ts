import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())
  changeMonth(n:number){
    this.date.next(this.date.value.add(n, 'month'))
  }
  constructor() {}
  changeDate(date: moment.Moment){
    this.date.next(this.date.value.set({
      date: date.date(),
      month: date.month()
    }))
  }
}
