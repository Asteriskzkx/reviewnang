import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieReviewsFilter',
  standalone: false,
})
export class MovieReviewsFilterPipe implements PipeTransform {
  transform(reviews: any, movieTitle: string): any {
    return reviews.filter((review: { movieTitle: string; }) => review.movieTitle === movieTitle);
  }
}
