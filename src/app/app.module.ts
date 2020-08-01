import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivesComponent } from './directives/directives.component';
import { BackendService } from './backend.service';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, PersonComponent, PersonListComponent, BindingPracticeComponent, SizerComponent, DirectivesComponent, LoginComponent, MovieComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BackendService]
})
export class AppModule { }
