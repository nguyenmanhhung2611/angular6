import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
const routersConfig: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'detail', component: ContactDetailComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

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
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routersConfig)
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
