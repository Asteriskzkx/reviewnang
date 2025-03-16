import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  nowInTheaters: Movie[] = [
    {
      title: 'Captain America: Brave New World',
      rating: '6.1',
      usersRating: '52K',
      watchlist: '144k',
      imageUrl: 'assets/images/movie-posters/1.jpg',
      director: 'Julius Onah',
      runtime: '1 hour 58 minutes',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      description:
        'Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.',
      format: 'Movie',
      releaseDate: new Date('2025-02-14'),
      tagline: 'The future favors the brave.',
      MPA: 'PG-13',
      countriesOfOrigin: ['United States', 'Canada'],
      languages: ['English'],
      aka: [
        'Captain America 4',
        'Captain America: Brave New World',
        'キャプテン・アメリカ：ブレイブ・ニュー・ワールド',
      ],
      filmingLocations: [
        'Atlanta, Georgia',
        'Washington, District of Columbia',
        'Oaxaca',
        'Tokyo',
        'Jordan',
      ],
      productionCompanies: [
        'Marvel Studios',
        'British Columbia Film Commission',
      ],
      summaries: [
        {
          provider: 'Marvel Studios',
          text: 'Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.',
        },
        {
          provider: 'Blazer346',
          text: "Some time after the events of The Falcon and the Winter Soldier, Sam Wilson has now fully embraced his title as the new Captain America. Now Sam is summoned to the White House as the new president Ross wants to work with him on rebuilding the Avengers. But trouble ensues when Sam's friend Isaiah Bradley uncontrollably tries to assassinate the president and is framed for the attempt. Now Sam and his partner Joaquin Torres must race against time to uncover the true culprit and foil an evil plot that unwittingly involves President Ross",
        },
      ],
      cast: [
        {
          name: 'Anthony Mackie',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/1.jpg',
          role: 'Sam Wilson / Captain America',
        },
        {
          name: 'Harrison Ford',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/2.jpg',
          role: 'President Thaddeus Ross',
        },
        {
          name: 'Danny Ramirez',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/3.jpg',
          role: 'Joaquin Torres',
        },
        {
          name: 'Shira Haas',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/4.jpg',
          role: 'Ruth Bat-Seraph',
        },
        {
          name: 'Carl Lumbly',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/5.jpg',
          role: 'Isaiah Bradley',
        },
        {
          name: 'Tim Blake Nelson',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/6.jpg',
          role: 'Samuel Sterns',
        },
        {
          name: 'Giancarlo Esposito',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/7.jpg',
          role: 'Sidewinder',
        },
        {
          name: 'Xosha Roquemore',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/8.jpg',
          role: 'Leila Taylor',
        },
        {
          name: 'Jóhannes Haukur Jóhannesson',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/9.jpg',
          role: 'Copperhead',
        },
        {
          name: 'William Mark McCullough',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/10.jpg',
          role: 'Commander Dennis Dunphy',
        },
        {
          name: 'Takehiro Hira',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/11.jpg',
          role: 'Prime Minister Ozaki',
        },
        {
          name: 'Harsh Nayyar',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/12.jpg',
          role: 'Prime Minister Kapur',
        },
        {
          name: 'Rick Espaillat',
          imageUrl: 'assets/images/cast-pictures/Captain-America 4/13.jpg',
          role: 'French President',
        },
      ],
      staff: [
        {
          name: 'Julius Onah',
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/1.jpg',
          role: 'Director',
        },
        {
          name: 'Rob Edwards',
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/2.jpg',
          role: 'Writer',
        },
        {
          name: 'Malcolm Spellman',
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/3.jpg',
          role: 'Writer',
        },
        {
          name: 'Dalan Musson',
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/4.webp',
          role: 'Writer',
        },
        {
          name: 'Peter Glanz',
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/5.jpg',
          role: 'Writer',
        },
        {
          name: 'Mitchell Bell',
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/6.jpg',
          role: 'Co-Producer',
        },
        {
          name: "Louis D'Esposito",
          imageUrl: 'assets/images/staff-pictures/Captain-America 4/7.jpg',
          role: 'Executive Producer',
        },
        {
          name: 'Kyana F. Davidson',
          imageUrl: 'assets/images/staff-pictures/Default/1.jpg',
          role: 'Co-Producer',
        },
      ],
      trailerUrl:
        'https://www.youtube.com/embed/1pHDWnXmK7Y?si=M-brd95HTeUa2kEr',
    },
    {
      title: 'Paddington in Peru',
      rating: '6.8',
      usersRating: '12K',
      watchlist: '37.7k',
      imageUrl: 'assets/images/movie-posters/2.jpg',
      description:
        'Paddington returns to Peru to visit his beloved Aunt Lucy, who now resides at the Home for Retired Bears. With the Brown family in tow, a thrilling adventure ensues when a mystery plunges them into an unexpected journey.',
      director: 'Dougal Wilson',
      runtime: '1 hour 46 minutes',
      genres: ['Adventure', 'Comedy', 'Family', 'Mystery'],
      format: 'Movie',
      releaseDate: new Date('2025-02-14'),
      countriesOfOrigin: ['United Kingdom', 'France', 'Japan', 'United States'],
      languages: ['English'],
      aka: [
        'Paddington en Perú',
        'Paddington 3',
        'Paddington Bear 3',
        'パディントン・イン・ペルー',
      ],
      filmingLocations: [
        'Colombia',
        'Peru',
        'El Prado River, Prado Reservoir',
        'England',
      ],
      productionCompanies: [
        'StudioCanal',
        'Columbia Pictures',
        'Kinoshita Group',
      ],
      summaries: [
        {
          provider: 'Deadline Hollywood',
          text: 'Paddington returns to Peru to visit his beloved Aunt Lucy, who now resides at the Home for Retired Bears. With the Brown Family in tow, a thrilling adventure ensues when a mystery plunges them into an unexpected journey through the Amazon rainforest and up to the mountain peaks of Peru.',
        },
        {
          provider: 'STUDIOCANAL',
          text: "Get ready for the journey of a lifetime as PADDINGTON IN PERU brings the world's most beloved bear back to his roots, his homeland Peru. Following the adventures of PADDINGTON and PADDINGTON 2, Paddington is still living happily with the Brown family in Windsor Gardens. When he receives a letter from the Reverend Mother, the blithe guitar strumming nun who runs the Home for Retired Bears, informing him that Aunt Lucy misses him dearly, he knows he simply must visit her as soon as possible. With his shiny new British passport in hand, Paddington is joined by the Browns, including the ever-resourceful Mrs. Bird, on an epic journey that none of them will ever forget. Along the way the group meet new friends, including the dashing riverboat captain Hunter and his daughter Gina. They join them on their thrilling escapades through the Amazon rainforest and up to the stunning mountain peaks of Peru. Together they encounter unexpected challenges, and Paddington begins to uncover surprising secrets about his past. Throughout the ups and downs, his unwavering optimism and kindness shine brightly in this brand-new Paddington cinematic adventure that reinforces the importance of family, and the joy of embracing one's heritage.",
        },
      ],
      tagline: 'A little bear goes a long way.',
      cast: [
        {
          name: 'Ben Whishaw',
          imageUrl: 'assets/images/cast-pictures/Paddington in Peru/1.jpg',
          role: 'Paddington Bear',
        },
        {
          name: 'Hugh Bonneville',
          imageUrl: 'assets/images/cast-pictures/Paddington in Peru/2.jpg',
          role: 'Henry Brown',
        },
        {
          name: 'Emily Mortimer',
          imageUrl: 'assets/images/cast-pictures/Paddington in Peru/3.jpg',
          role: 'Mary Brown',
        },
        {
          name: 'Imelda Staunton',
          imageUrl: 'assets/images/cast-pictures/Paddington in Peru/4.jpg',
          role: 'Aunt Lucy',
        },
      ],
      staff: [
        {
          name: 'Dougal Wilson',
          imageUrl: 'assets/images/staff-pictures/Paddington in Peru/1.jpg',
          role: 'Director',
        },
        {
          name: 'Mark Burton',
          imageUrl: 'assets/images/staff-pictures/Paddington in Peru/2.jpg',
          role: 'Writer',
        },
        {
          name: 'Jon Foster',
          imageUrl: 'assets/images/staff-pictures/Paddington in Peru/3.jpg',
          role: 'Writer',
        },
        {
          name: 'James Lamont',
          imageUrl: 'assets/images/staff-pictures/Paddington in Peru/4.webp',
          role: 'Writer',
        },
      ],
      trailerUrl:
        'https://www.youtube.com/embed/NTvudSGfHRI?si=trXeknRNek1VCee8',
      MPA: 'PG',
    },
    {
      title: 'Mickey 17',
      rating: '7.4',
      usersRating: '685',
      watchlist: '134k',
      imageUrl: 'assets/images/movie-posters/3.jpg',
      description:
        'Mickey 17, known as an "expendable," goes on a dangerous journey to colonize an ice planet.',
      director: 'Bong Joon Ho',
      runtime: '2 hours 19 minutes',
      genres: ['Adventure', 'Comedy', 'Fantasy', 'Sci-Fi'],
      format: 'Movie',
      releaseDate: new Date('2025-03-07'),
      countriesOfOrigin: ['South Korea', 'United States'],
      languages: ['English'],
      aka: ['Mickey 17', 'ミッキー17', '米奇17號', 'Микки 17', '编号17'],
      filmingLocations: [
        'Warner Bros. Studios Leavesden, Warner Drive, Leavesden, Watford, Hertfordshire, England, UK',
      ],
      productionCompanies: [
        'Warner Bros.',
        'Plan B Entertainment',
        'Offscreen',
      ],
      summaries: [
        {
          provider: 'Warner Bros.',
          text: 'Adapted from the novel Mickey7 by Edward Ashton, this stars Robert Pattinson as an "expendable" - a disposable crew member on a space mission, selected for dangerous tasks because he can be renewed if his body dies, with his memories largely intact. With one regeneration, though, things go very wrong.',
        },
      ],
      tagline: "He's dying to save mankind.",
      MPA: 'R',
      cast: [
        {
          name: 'Robert Pattinson',
          imageUrl: 'assets/images/cast-pictures/Mickey 17/1.jpg',
          role: 'Mickey Barnes',
        },
        {
          name: 'Steven Yeun',
          imageUrl: 'assets/images/cast-pictures/Mickey 17/2.jpg',
          role: 'Timo',
        },
        {
          name: 'Michael Monroe',
          imageUrl: 'assets/images/cast-pictures/Mickey 17/3.jpg',
          role: 'Matthew',
        },
        {
          name: 'Patsy Ferran',
          imageUrl: 'assets/images/cast-pictures/Mickey 17/4.jpg',
          role: 'Dorothy',
        },
        {
          name: 'Cameron Britton',
          imageUrl: 'assets/images/cast-pictures/Mickey 17/5.jpg',
          role: 'Arkady',
        },
      ],
      staff: [
        {
          name: 'Bong Joon Ho',
          imageUrl: 'assets/images/staff-pictures/Mickey 17/1.jpg',
          role: 'Director',
        },
        {
          name: 'Edward Ashton',
          imageUrl: 'assets/images/staff-pictures/Default/1.jpg',
          role: 'Writer',
        },
      ],
      trailerUrl:
        'https://www.youtube.com/embed/osYpGSz_0i4?si=ghpFcUzWCjjosUzH',
    },
    {
      title: 'The Monkey',
      rating: '6.6',
      usersRating: '6.9k',
      watchlist: '59.2k',
      imageUrl: 'assets/images/movie-posters/4.jpg',
      description:
        "When twin brothers Bill and Hal find their father's old monkey toy in the attic, a series of gruesome deaths start. The siblings decide to throw the toy away and move on with their lives, growing apart over the years.",
      director: 'Osgood Perkins',
      genres: ['Horror'],
      runtime: '1 hour 38 minutes',
      format: 'Movie',
      releaseDate: new Date('2025-02-21'),
      countriesOfOrigin: ['United States', 'United Kingdom', 'Canada'],
      languages: ['English'],
      aka: ['The Monkey', 'El mono', 'O Macaco', '史蒂芬金之猴子', '猴子'],
      filmingLocations: [
        'Vancouver, British Columbia, Canada',
        'Maple Ridge, British Columbia, Canada',
      ],
      productionCompanies: [
        'Atomic Monster',
        'Black Bear International',
        'British Columbia Film Commission',
      ],
      MPA: 'R',
      summaries: [
        {
          provider: 'Atomic Monster',
          text: "When twin brothers Bill and Hal find their father's old monkey toy in the attic, a series of gruesome deaths start. The siblings decide to throw the toy away and move on with their lives, growing apart over the years.",
        },
      ],
      tagline: "Everybody dies. And that's fucked up.",
      trailerUrl:
        'https://www.youtube.com/embed/husMGbXEIho?si=qmwW18BR1m620iGS',
      cast: [
        {
          name: 'Theo James',
          imageUrl: 'assets/images/cast-pictures/The Monkey/1.jpg',
          role: 'Hal • Bill',
        },
        {
          name: 'Tatiana Maslany',
          imageUrl: 'assets/images/cast-pictures/The Monkey/2.jpg',
          role: 'Lois',
        },
        {
          name: 'Christian Convery',
          imageUrl: 'assets/images/cast-pictures/The Monkey/3.jpg',
          role: 'Young Hal • Young Bill',
        },
        {
          name: "Colin O'Brien",
          imageUrl: 'assets/images/cast-pictures/The Monkey/4.jpg',
          role: 'Petey',
        },
        {
          name: 'Elijah Wood',
          imageUrl: 'assets/images/cast-pictures/The Monkey/5.jpg',
          role: 'Ted',
        },
        {
          name: 'Rohan Campbell',
          imageUrl: 'assets/images/cast-pictures/The Monkey/6.jpg',
          role: 'Thrasher • Ricky',
        },
        {
          name: 'Sarah Levy',
          imageUrl: 'assets/images/cast-pictures/The Monkey/7.jpg',
          role: 'Aunt Ida',
        },
        {
          name: 'Osgood Perkins',
          imageUrl: 'assets/images/cast-pictures/The Monkey/8.jpg',
          role: 'Uncle Chip',
        },
      ],
      staff: [
        {
          name: 'Osgood Perkins',
          imageUrl: 'assets/images/staff-pictures/The Monkey/1.jpg',
          role: 'Director',
        },
        {
          name: 'Stephen King',
          imageUrl: 'assets/images/staff-pictures/The Monkey/2.jpg',
          role: 'Writer',
        }
      ],
    },
    {
      title: 'Dog Man',
      rating: '6.3',
      usersRating: '5k',
      watchlist: '12.2k',
      imageUrl: 'assets/images/movie-posters/5.jpg',
      description:
        'Dog Man, half dog and half man, he is sworn to protect and serve as he doggedly pursues the feline supervillain Petey the Cat.',
      director: 'Peter Hastings',
      genres: [
        'Animation',
        'Action',
        'Adventure',
        'Comedy',
        'Crime',
        'Family',
        'Fantasy',
        'Sci-Fi',
      ],
    },
  ];

  upcomingMovies: Movie[] = [
    {
      title: 'I Heart Willie',
      imageUrl: 'assets/images/movie-posters/6.jpg',
      director: 'Alejandro G. Alegre',
      runtime: '1 hour 28 minutes',
      genres: ['Horror'],
      description:
        'An obsessed psychopath unknowingly leads her friends into a deadly mousetrap where pure evil seeks to harvest their skin, in this horrific origin story of the most beloved cartoon character of modern times.',
    },
    {
      title: 'Last Breath',
      imageUrl: 'assets/images/movie-posters/7.jpg',
      director: 'Alex Parkinson',
      runtime: '1 hour 33 minutes',
      genres: ['Drama', 'Thriller'],
      description:
        "A true story that follows seasoned deep-sea divers as they battle the raging elements to rescue their crew mate trapped hundreds of feet below the ocean's surface.",
    },
    {
      title: 'Mobile Suit Gundam GQuuuuuuX: Beginning',
      imageUrl: 'assets/images/movie-posters/8.jpg',
      director: 'Kazuya Tsurumaki',
      runtime: '1 hour 21 minutes',
      genres: ['Animation', 'Action', 'Adventure', 'Drama', 'Sci-Fi'],
      description:
        'In a war between Zeon and Earth Federation, a stolen prototype Gundam vanishes. Years later, a girl with mysterious abilities finds herself piloting a new Gundam in underground mech battles while searching for answers about her powers.',
    },
    {
      title: 'Snow White',
      imageUrl: 'assets/images/movie-posters/9.jpg',
      director: 'Marc Webb',
      runtime: 'TBA',
      genres: ['Adventure', 'Family', 'Fantasy', 'Musical', 'Romance'],
      description:
        "Live-action adaptation of the 1937 Disney animated film 'Snow White and the Seven Dwarfs'",
    },
    {
      title: 'A Minecraft Movie',
      imageUrl: 'assets/images/movie-posters/10.jpg',
      director: 'Jared Hess',
      runtime: '1 hours 41 minutes',
      genres: ['Action', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
      description:
        "Four misfits are suddenly pulled through a mysterious portal into a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a quest with an unexpected, expert crafter.",
    },
  ];

  latestReviews: Review[] = [
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '8.5/10',
      reviewText: `Captain America: Brave New World delivers a solid entry into the MCU, blending political intrigue with classic superhero action. Anthony Mackie steps comfortably into the role of Captain America, showcasing a nuanced portrayal of Sam Wilson as he navigates the complexities of his new mantle. The film excels in exploring the themes of leadership and responsibility, particularly in a post-Blip world where global tensions are high. The narrative skillfully weaves together elements of government conspiracy and personal struggles, providing a compelling backdrop for Sam's journey.
    
        The action sequences are well-choreographed and impactful, though they occasionally lean into familiar MCU tropes. The supporting cast, including [mention a few names if you have them], provides strong performances, adding depth to the narrative. However, the film's pacing falters slightly in the second act, where exposition-heavy dialogue slows down the momentum.
    
        Visually, the film is stunning, with impressive special effects and a color palette that reflects the tone of the story. The score, while not particularly memorable, effectively complements the on-screen action. The film also introduces intriguing new villains who hint at a larger, potentially more sinister plotline, setting up exciting possibilities for future installments.
    
        Overall, Captain America: Brave New World is a worthwhile addition to the MCU, offering a mix of thrilling action and thought-provoking themes. While it may not reach the heights of some of the franchise's best entries, it provides a strong foundation for Sam Wilson's Captain America and leaves audiences eager to see what the future holds for this iconic character.`,
      reviewer: 'MarvelFanatic22',
      timeAgo: '3 minutes ago',
      helpfulCount: 87,
      unhelpfulCount: 5,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '9/10',
      reviewText: `"Brave New World" is a thrilling and thought-provoking chapter in the Captain America saga. Anthony Mackie delivers a powerful performance as Sam Wilson, grappling with the legacy of the shield and the challenges of a changing world. The action sequences are top-notch, and the story explores complex themes with depth and nuance. A must-see for MCU fans!`,
      reviewer: 'CapFan4Life',
      timeAgo: '1 hour ago',
      helpfulCount: 56,
      unhelpfulCount: 2,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '7.5/10',
      reviewText: `While "Brave New World" has its moments of brilliance, it doesn't quite reach the heights of some of the earlier Captain America films. Anthony Mackie is solid as Sam Wilson, but the story feels a bit convoluted at times. The action is good, but not as memorable as in previous installments.`,
      reviewer: 'MovieBuff123',
      timeAgo: '4 hours ago',
      helpfulCount: 23,
      unhelpfulCount: 8,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '8/10',
      reviewText: `Anthony Mackie shines as the new Captain America! "Brave New World" is a solid addition to the MCU, with a compelling story and great action. The film explores important themes and sets up exciting possibilities for the future.`,
      reviewer: 'SuperheroFanatic',
      timeAgo: '1 day ago',
      helpfulCount: 112,
      unhelpfulCount: 4,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '6.5/10',
      reviewText: `"Brave New World" is a decent MCU entry, but it didn't fully resonate with me. The story felt a bit predictable, and the action sequences were nothing special. Anthony Mackie is good as Sam Wilson, but the film lacks the emotional depth of some of the other Captain America movies.`,
      reviewer: 'FilmCritic99',
      timeAgo: '2 days ago',
      helpfulCount: 15,
      unhelpfulCount: 12,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Paddington in Peru',
      rating: '9/10',
      reviewText: `Paddington in Peru is a delightful adventure that captures the spirit of the beloved bear. The film is heartwarming, funny, and beautifully animated, with a charming story that will appeal to audiences of all ages. Ben Whishaw is perfect as the voice of Paddington, bringing the character to life with warmth and humor. The supporting cast is equally strong, and the film's message of kindness and acceptance is both timely and timeless. A must-see for Paddington fans and anyone looking for a feel-good movie!`,
      reviewer: 'BearLover123',
      timeAgo: '1 hour ago',
      helpfulCount: 45,
      unhelpfulCount: 1,
    },
    {
      movieTitle: 'Paddington in Peru',
      rating: '8/10',
      reviewText: `Paddington in Peru is a charming and heartwarming film that captures the essence of the beloved bear. The animation is beautiful, the voice acting is top-notch, and the story is engaging for both
    children and adults. The film's message of kindness and acceptance is delivered with sincerity and humor, making it a joy to watch. While the plot may be predictable at times, the overall experience is delightful and sure to bring a smile to your face. A lovely movie for the whole family!`,
      reviewer: 'FamilyFilmFan',
      timeAgo: '3 hours ago',
      helpfulCount: 32,
      unhelpfulCount: 3,
    },
    {
      movieTitle: 'Paddington in Peru',
      rating: '7/10',
      reviewText: `Paddington in Peru is a fun and heartwarming film that will delight fans of the series. The animation is colorful and engaging, and the voice cast does a great job bringing the characters to life. The story is sweet and entertaining, with plenty of humor and heartwarming moments. While the plot may be a bit formulaic, the film's positive message and lovable characters make it a worthwhile watch for families and Paddington fans.`,
      reviewer: 'MovieManiac',
      timeAgo: '1 day ago',
      helpfulCount: 18,
      unhelpfulCount: 5,
    },
  ];

  constructor() { }

  /**
  * Add a new review to the collection
  * @param review The review to add
  */
  addReview(review: Review): void {
    // Add to the beginning of the array
    this.latestReviews.unshift(review);

    // Save reviews to localStorage
    this.saveReviews();
  }

  /**
   * Get all reviews for a specific movie
   * @param movieTitle The title of the movie
   * @returns Array of reviews for the movie
   */
  getReviewsForMovie(movieTitle: string): Review[] {
    return this.latestReviews.filter(review => review.movieTitle === movieTitle);
  }


  /**
   * Mark a review as helpful
   * @param index The index of the review
   */
  markReviewHelpful(index: number): void {
    if (index >= 0 && index < this.latestReviews.length) {
      this.latestReviews[index].helpfulCount++;
      this.saveReviews();
    }
  }

  /**
   * Mark a review as unhelpful
   * @param index The index of the review
   */
  markReviewUnhelpful(index: number): void {
    if (index >= 0 && index < this.latestReviews.length) {
      this.latestReviews[index].unhelpfulCount++;
      this.saveReviews();
    }
  }

  /**
   * Save reviews to localStorage
   */
  private saveReviews(): void {
    try {
      localStorage.setItem('reviewNang_reviews', JSON.stringify(this.latestReviews));
    } catch (e) {
      console.error('Error saving reviews to localStorage', e);
    }
  }

  /**
   * Load reviews from localStorage
   */
  private loadReviews(): void {
    try {
      const savedReviews = localStorage.getItem('reviewNang_reviews');
      if (savedReviews) {
        // Merge saved reviews with default reviews
        const parsedReviews = JSON.parse(savedReviews);

        // Keep the original reviews if we don't have saved reviews
        if (parsedReviews && parsedReviews.length > 0) {
          this.latestReviews = parsedReviews;
        }
      }
    } catch (e) {
      console.error('Error loading reviews from localStorage', e);
    }
  }
}
