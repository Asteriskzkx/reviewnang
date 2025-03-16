import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: false,
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})


export class ReviewComponent {

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
  


  
  constructor(private authService: AuthService,private location: Location){}
  ngOnInit(): void {


    this.authService.authState.subscribe((user) => {

      this.currentUser = user;
    });
  }

  goBack(): void {
    this.location.back(); // Navigates to the previous page
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

  saveReview() {
    this.reviewError = '';
    this.summaryError = '';

    if (this.reviewText.length < 100) {
      this.reviewError = 'Write review must be greater than 100 characters.';
    }

    if (this.summaryText.length < 20) {
      this.summaryError = 'Review Summary must be greater than 20 characters.';
    }

    if (this.reviewError || this.summaryError) {
      // แสดงข้อความแจ้งเตือนสีแดง
      return;
    }
    console.log('Review Text:', this.reviewText);
    console.log('Summary Text:', this.summaryText);
    console.log('Rating:', this.rating);
    this.clearForm();


    // ดำเนินการบันทึกรีวิว
    alert('Review saved!');
  }

  clearForm(){
    this.reviewText = '';
    this.summaryText = '';
    this.rating = 0;
    this.hoveredRating = 0;
    //ถ้าต้องการล้าง checkbox ด้วยให้เพิ่มตรงนี้
    let privateReviewCheckbox = document.getElementById("privateReview") as HTMLInputElement;
    if (privateReviewCheckbox) {
      privateReviewCheckbox.checked = false;
    }
  }
  
}
