import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routersConfig: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'detail', component: ContactDetailComponent },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routersConfig)],
    declarations: [
        PageNotFoundComponent,
        ContactsComponent,
        ContactDetailComponent
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }