import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent  {
  @Input() photo: string = '';
  @Input() title: string = '';
  @Input() description: string ='';
  @Input() id:string = '';

  constructor(){

  }


}
