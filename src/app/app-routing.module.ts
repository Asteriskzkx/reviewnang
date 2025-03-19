import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieComponent } from './components/movie/movie.component';
import { ReviewComponent } from './components/review/review.component';
import { SignupComponent } from './components/signup/signup.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'movie/:title', component: MovieComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
