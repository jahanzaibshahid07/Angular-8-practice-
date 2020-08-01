import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private back : BackendService) { }

  username:string = "admin";
  password:string = "test";
  message: string;

  ngOnInit() {
  }

  onChange()
  {
      this.back.validateuser(this.username,this.password).subscribe(
        m => 
        {
          if(m)
          {
              this.message = "valid";
          }
          else
          {
            this.message = "invalid";
          }
        }
      );

      
      
  }

  onClear()
  {
    this.username = "";
    this.password = "";
    this.message = "";
  }

}