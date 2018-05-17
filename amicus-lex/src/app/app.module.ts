import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RoutingModule} from './modules/router.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
//import {NeedAuthGuard} from "./route-guards/need-auth.guard";
//import {NeedAnonGuard} from "./route-guards/need-anon.guard";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    RegisterComponent,
    SearchComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
