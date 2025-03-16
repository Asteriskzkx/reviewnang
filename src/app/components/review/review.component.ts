import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MovieService } from '../../services/movie.service';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-review',
  standalone: false,
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent implements OnInit {
  reviewText: string = '';
  summaryText: string = '';
  reviewError = '';
  summaryError = '';
  score: number = 0;
  privateReview: boolean = false;
  rating = 0;
  hoveredRating = 0;
  stars = Array(10).fill(0);
  currentUser: any;
  movieTitle: string = '';

  constructor(
    private authService: AuthService,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['movie']) {
        this.movieTitle = params['movie'];
      }
    });

    this.authService.authState.subscribe((user) => {
      this.currentUser = user;
    });
  }

  updatePreview(): void {
    console.log('Preview Updated');
  }

  setRating(value: number) {
    this.rating = value;
  }

  setHoveredRating(value: number) {
    this.hoveredRating = value;
  }

  resetHover() {
    this.hoveredRating = 0;
  }

  isValidForm(): boolean {
    return (
      this.reviewText.length >= 100 &&
      this.summaryText.length >= 20 &&
      this.summaryText.length <= 120 &&
      this.rating > 0
    );
  }

  saveReview() {
    this.reviewError = '';
    this.summaryError = '';

    if (this.reviewText.length < 100) {
      this.reviewError = 'Review must be greater than 100 characters.';
    }

    if (this.summaryText.length < 20) {
      this.summaryError = 'Review Summary must be greater than 20 characters.';
    } else if (this.summaryText.length > 120) {
      this.summaryError = 'Review Summary must be less than 120 characters.';
    }

    if (this.rating === 0) {
      this.reviewError = this.reviewError || 'Please select a rating.';
    }

    if (this.reviewError || this.summaryError) {
      return;
    }

    const privateReviewCheckbox = document.getElementById(
      'privateReview'
    ) as HTMLInputElement;
    this.privateReview = privateReviewCheckbox
      ? privateReviewCheckbox.checked
      : false;

    const newReview: Review = {
      movieTitle: this.movieTitle || 'Captain America: Brave New World',
      rating: `${this.rating}/10`,
      reviewText: this.reviewText,
      reviewer: this.currentUser?.username || 'Margarete',
      timeAgo: 'Just now',
      helpfulCount: 0,
      unhelpfulCount: 0,
      imageUrl: this.getMovieImageUrl(this.movieTitle),
    };

    this.movieService.latestReviews.unshift(newReview);

    console.log('Review saved:', newReview);

    alert('Review saved successfully!');

    if (this.movieTitle) {
      this.router.navigate(['/movie', this.movieTitle]);
    } else {
      this.clearForm();
    }
  }


  public getMovieImageUrl(movieTitle: string): string {
    const allMovies = [
      ...this.movieService.nowInTheaters,
      ...this.movieService.upcomingMovies,
    ];

    const movie = allMovies.find((m) => m.title === movieTitle);

    return movie?.imageUrl || 'assets/images/movie-posters/1.jpg';
  }

  clearForm() {
    this.reviewText = '';
    this.summaryText = '';
    this.rating = 0;
    this.hoveredRating = 0;
    this.reviewError = '';
    this.summaryError = '';

    const privateReviewCheckbox = document.getElementById(
      'privateReview'
    ) as HTMLInputElement;
    if (privateReviewCheckbox) {
      privateReviewCheckbox.checked = false;
    }
  }
}
