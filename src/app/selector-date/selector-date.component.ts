import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-selector-date',
  templateUrl: './selector-date.component.html',
  styleUrls: ['./selector-date.component.scss']
})
export class SelectorDateComponent {
  constructor(public dateService: DateService) { }

  go(n:number){
    this.dateService.changeMonth(n)
  }


}
