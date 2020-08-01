import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  constructor() { }
  
  @Input() size:number = 0; // event 
  @Output() sizechange = new  EventEmitter<number>();  // event
   
  ngOnInit() {
  }

  inc()
  {
    this.resize(1);
  }

  dec()
  {
    this.resize(-1);
  }

  resize(delta:number)
  {
    if(this.size > 20)
    {
     this.sizechange.emit(this.size);
    }

    this.size = this.size + delta;
  }

}