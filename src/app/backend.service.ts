import { Injectable } from '@angular/core';
import { Person } from './Person';
import {of,Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(private httpobj:HttpClient) { }


  getPerson():Observable<Array<Person>>
  {
    const persons:Person[] = [];
    persons.push(new Person(1,"choora",23));
    persons.push(new Person(2,"soora",22));
    persons.push(new Person(3,"tuntunu",21));
    return of(persons);
  }

  validateuser(user:string, pass:string): Observable<boolean>
  {
      if(user === "admin" && pass === "test")
      {
          return of(true);
      }
      else
      {
        return of(false);
      }
  }

  GetMovies() : Observable<any>
  {
      let u =  "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow";

      return this.httpobj.get<any>(u);
  }

}