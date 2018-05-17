
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {DetailsComponent} from '../details/details.component';
import {ProfileComponent} from '../profile/profile.component';
import {RegisterComponent} from '../register/register.component';
import {SearchComponent} from '../search/search.component';

const routes: Routes = [
  
    {path: 'login', component: LoginComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'search', component: SearchComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {
}
