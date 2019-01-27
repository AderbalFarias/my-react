import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsService } from './services/settings.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SettingsComponent,
        DashboardComponent,
        HomeComponent,
        LoginComponent,
        NotFoundComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        SettingsService, 
        AuthService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
