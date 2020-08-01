import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons:Person[] =[];

  constructor(private backendservices: BackendService)
   { }

  ngOnInit() {

    this.backendservices.getPerson().subscribe(
      m => {
        this.persons = m;
      }
    );
  }

  EventHandler($event)
  {
    alert("Person : " + $event);
  }

}