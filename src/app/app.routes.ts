import { Routes } from '@angular/router';

import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { DeleteComponent } from './post/delete/delete.component';
import { EditComponent } from './post/edit/edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'post/index', pathMatch: 'full'},
    { path: 'post/index', component: IndexComponent },
    { path: 'post/:postId/view', component: ViewComponent },
    { path: 'post/delete', component: DeleteComponent },
    { path: 'post/:postId/edit', component: EditComponent } 
];
