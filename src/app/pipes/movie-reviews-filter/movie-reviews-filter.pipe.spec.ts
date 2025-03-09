import { MovieReviewsFilterPipe } from '../movie-reviews-filter/movie-reviews-filter.pipe';

describe('MovieReviewsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieReviewsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
