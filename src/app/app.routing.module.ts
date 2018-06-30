import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { SignupComponent } from './auth/signup/signup.component';

// const routes: Route = [
//     { path:'', component: WelcomeComponent },
//     { path:'signup', component: SignupComponent },
//     { path: 'login', component: LoginComponent },
//     { path: 'training', component: TrainingComponent }
// ];

@NgModule({
    imports: [RouterModule.forRoot([
        { path:'', component: WelcomeComponent },
        { path:'signup', component: SignupComponent },
        { path: 'login', component: LoginComponent },
        { path: 'training', component: TrainingComponent }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {

}