
import { RouterModule, Routes } from '@angular/router';
import { AlertSearchComponent } from './components/alert-search/alert-search.component';

const APP_ROUTES: Routes = [
    { path: 'alert/search', component: AlertSearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'alert/search' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
