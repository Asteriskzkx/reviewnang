import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-review',
  standalone: false,
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  reviewText: string = '';
  summaryText: string = '';
  reviewError = '';
  summaryError = '';
  score: number = 0;
  privateReview: boolean = false;
  rating = 0; // คะแนนจริงที่ถูกเลือก
  hoveredRating = 0; // คะแนนที่ hover อยู่
  stars = Array(10).fill(0); // สร้าง array 10 ช่องสำหรับดาว
  currentUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.currentUser = user;
    });
  }

  updatePreview(): void {
    console.log('Preview Updated');
  }

  setRating(value: number) {
    this.rating = value; // กำหนดคะแนนเมื่อกดดาว
  }

  setHoveredRating(value: number) {
    this.hoveredRating = value; // กำหนดคะแนนที่ hover
  }

  resetHover() {
    this.hoveredRating = 0; // รีเซ็ต hover เมื่อเมาส์ออก
  }

  // Add the isValidForm method that was missing
  isValidForm(): boolean {
    // Return true if the form is valid (review length >= 100, summary length >= 20, and rating > 0)
    return this.reviewText.length >= 100 &&
      this.summaryText.length >= 20 &&
      this.summaryText.length <= 120 &&
      this.rating > 0;
  }

  saveReview() {
    this.reviewError = '';
    this.summaryError = '';

    // Validate review text
    if (this.reviewText.length < 100) {
      this.reviewError = 'Review must be greater than 100 characters.';
    }

    // Validate summary text
    if (this.summaryText.length < 20) {
      this.summaryError = 'Review Summary must be greater than 20 characters.';
    } else if (this.summaryText.length > 120) {
      this.summaryError = 'Review Summary must be less than 120 characters.';
    }

    // Validate rating
    if (this.rating === 0) {
      this.reviewError = this.reviewError || 'Please select a rating.';
    }

    // Return if there are any errors
    if (this.reviewError || this.summaryError) {
      return;
    }

    console.log('Review Text:', this.reviewText);
    console.log('Summary Text:', this.summaryText);
    console.log('Rating:', this.rating);

    // Display success message and clear form
    alert('Review saved!');
    this.clearForm();
  }

  clearForm() {
    this.reviewText = '';
    this.summaryText = '';
    this.rating = 0;
    this.hoveredRating = 0;
    this.reviewError = '';
    this.summaryError = '';

    // Reset checkbox
    const privateReviewCheckbox = document.getElementById("privateReview") as HTMLInputElement;
    if (privateReviewCheckbox) {
      privateReviewCheckbox.checked = false;
    }
  }
}