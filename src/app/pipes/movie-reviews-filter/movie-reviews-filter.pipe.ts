import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie3ReviewsFilter',
  standalone: false,
})
export class MovieReviewsFilterPipe implements PipeTransform {
  transform(reviews: any, movieTitle: string, limit: number = 3): any {
    return reviews
      .filter((review: { movieTitle: string }) => review.movieTitle === movieTitle)
      .slice(0, limit);
  }
}

@Pipe({
  name: 'movieReviewsFilter',
  standalone: false,
})
export class MovieAllReviewsFilterPipe implements PipeTransform {
  transform(reviews: any, movieTitle: string): any {
    return reviews
      .filter((review: { movieTitle: string }) => review.movieTitle === movieTitle)
  }
}

