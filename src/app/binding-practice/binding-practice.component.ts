import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {

  itemimageurl:string = "image.jpg";
  name:string = "jahanzaib";
  age:number = 22;
  test:boolean = true;
  testobject:Object = {id:1, name:"ali", age:12};
  login1: string = "test1";
  login2: string = "jahanzaib";

  constructor() 
  {

  }

  ngOnInit() 
  {

  }
    show(v)
    {
      alert(v);
    }

    setValue($event)
    {
        this.login1 = $event.target.value;
    }
    
    onSaveClick($event)
    {
      if($event)
      {
        alert("button clicked" + $event.target.textContent);
      }
      else
      {
          alert("button clicked...");
      }
    }

}