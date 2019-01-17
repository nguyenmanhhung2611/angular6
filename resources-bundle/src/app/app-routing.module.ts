import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { DetailComponent } from "./detail/detail.component";

const routeConfig: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'detail/:id/:name/:phoneNumber', component: DetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routeConfig)
  ],
  declarations: [
    PageNotFoundComponent,
    ContactsComponent, 
    DetailComponent
  ]
})
export class AppRoutingModule {}
