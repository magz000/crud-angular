import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogListComponent} from './blogs/list/list.component';
import {BlogAddComponent} from './blogs/add/add.component';
import {BlogShowComponent} from './blogs/show/show.component';
import {BlogEditComponent} from './blogs/edit/edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/blogs', pathMatch: 'full' },
    { path: 'blogs', component: BlogListComponent },
    { path: 'blogs/add', component: BlogAddComponent },
    { path: 'blogs/:id', component: BlogShowComponent},
    { path: 'blogs/:id/edit', component: BlogEditComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
