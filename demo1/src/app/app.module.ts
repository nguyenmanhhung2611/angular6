import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { Child2Component } from './child2.component';
import { Parent2Component } from './parent2.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { IpComponent } from './ip.component';
import { RoundPipe } from './round.pipe';
import { IpService } from './ip.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ChildComponent,
    ParentComponent,
    Child2Component,
    Parent2Component,
    CardComponent,
    LearnPipeComponent,
    IpComponent,
    RoundPipe,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
