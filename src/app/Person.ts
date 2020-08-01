export class Person
{
  constructor(public id:number,public name:string, public age:number)
  {

  }
}

export interface Movie
{
  items: Array<MovieResponse>;
  
}

export interface MovieResponse
{
  title : string;
  link : string;
  score : number;

}