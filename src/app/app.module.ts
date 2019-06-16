import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BlogListComponent } from './blogs/list/list.component';
import { BlogAddComponent } from './blogs/add/add.component';
import { BlogShowComponent } from './blogs/show/show.component';
import { BlogEditComponent } from './blogs/edit/edit.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogListComponent,
        BlogAddComponent,
        BlogShowComponent,
        BlogEditComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
