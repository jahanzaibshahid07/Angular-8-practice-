import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  countryselected:string;

  person = [
    
    {id: 1, name : "jahnzaib", age : 23},
    {id: 2, name : "ali", age : 22},
    {id: 3, name : "zeeshan", age : 25}

    ]

  ngOnInit() 
  {

  }

}