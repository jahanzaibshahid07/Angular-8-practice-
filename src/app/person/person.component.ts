import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() per:Person;
  iscounted : boolean = false;
  @Output() CountedEvent = new EventEmitter<number>();

  constructor()
   {
     // this.per = new Person(1,"jahanzab shahid",23); 
   }

  ngOnInit() 
  {

  }

  onCounted()
  {
    this.iscounted = true;
   // this.CountedEvent.emit(this.per.id);
  }

}