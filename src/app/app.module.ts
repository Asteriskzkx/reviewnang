import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { MovieComponent } from './components/movie/movie.component';
import { UserDropdownComponent } from './shared/user-dropdown/user-dropdown.component';
import { SafeUrlPipe } from './pipes/safe-url/safe-url.pipe';
import { MovieAllReviewsFilterPipe, MovieReviewsFilterPipe } from './pipes/movie-reviews-filter/movie-reviews-filter.pipe';
import { ReviewComponent } from './components/review/review.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    MovieCardComponent,
    ReviewCardComponent,
    MovieComponent,
    UserDropdownComponent,
    SafeUrlPipe,
    MovieReviewsFilterPipe,
    MovieAllReviewsFilterPipe,
    ReviewComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
