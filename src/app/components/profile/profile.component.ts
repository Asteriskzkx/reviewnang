import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MovieService } from '../../services/movie.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;
  isLoggedIn: boolean = false;

  historyMovies: any[] = [];
  favoriteMovies: any[] = [];

  commentText: string = '';

  joinDate: string = 'Nov 1, 2024';
  isOnline: boolean = true;
  friendCount: number = 0;

  constructor(
    private authService: AuthService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
      this.currentUser = user;
    });

    this.loadMovies();
  }

  loadMovies(): void {
    this.historyMovies = this.movieService.nowInTheaters.slice(0, 4);

    this.favoriteMovies = this.movieService.nowInTheaters.slice(0, 2);
  }

  submitComment(): void {
    if (this.commentText.trim()) {
      console.log('Comment submitted:', this.commentText);
      alert('Comment submitted successfully!');
      this.commentText = '';
    } else {
      alert('Please enter a comment before submitting.');
    }
  }

  uploadProfilePicture(): void {
    console.log('Upload profile picture clicked');
    alert('Profile picture upload functionality would be implemented here.');
  }

  viewAllFavorites(): void {
    console.log('View all favorites clicked');
  }

  viewAllComments(): void {
    console.log('View all comments clicked');
  }
}