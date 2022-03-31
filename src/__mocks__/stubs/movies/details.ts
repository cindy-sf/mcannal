import type { Credits, MovieDetails, MoviesDetailsApiResponseError } from "@src/types/movies"

export const creditsStub: Credits = {
  id: 152601,
  cast: [{
    adult: false,
    gender: 2,
    id: 73421,
    known_for_department: "Acting",
    name: "Joaquin Phoenix",
    original_name: "Joaquin Phoenix",
    popularity: 16.388,
    profile_path: "/1UzIGSKFH0A9ouwnMwQQWUiqV2s.jpg",
    cast_id: 5,
    character: "Theodore Twombly",
    credit_id: "52fe4b259251416c910d1639",
    order: 0
  },
  {
    adult: false,
    gender: 1,
    id: 1245,
    known_for_department: "Acting",
    name: "Scarlett Johansson",
    original_name: "Scarlett Johansson",
    popularity: 43.028,
    profile_path: "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
    cast_id: 10,
    character: "Samantha (voice)",
    credit_id: "52fe4b259251416c910d164f",
    order: 1
  }],
  crew: [{
    adult: false,
    gender: 2,
    id: 202,
    known_for_department: "Writing",
    name: "Charlie Kaufman",
    original_name: "Charlie Kaufman",
    popularity: 4.585,
    profile_path: "/75aOpLBpvdtQM3BkWGFUvMs6LvH.jpg",
    credit_id: "5fde4e21e263bb0041bb0eeb",
    department: "Crew",
    job: "Thanks"
  },
  {
    adult: false,
    gender: 2,
    id: 1781,
    known_for_department: "Camera",
    name: "Quentin Tarantino",
    original_name: "Quentin Tarantino",
    popularity: 1.391,
    profile_path: "/d6GFg2GBKDlIlhJdKopjSQg09oe.jpg",
    credit_id: "5b3004570e0a265623008c54",
    department: "Camera",
    job: "Director",
  },
  {
    adult: false,
    gender: 2,
    id: 1781,
    known_for_department: "Camera",
    name: "Lance Acord",
    original_name: "Lance Acord",
    popularity: 1.391,
    profile_path: "/d6GFg2GBKDlIlhJdKopjSQg09oe.jpg",
    credit_id: "5b3004570e0a265623008c54",
    department: "Camera",
    job: "Additional Photography"
  }],
}

export const detailsStub: MovieDetails = {
  adult: false,
  backdrop_path: "/6mkIV5UmI9CoWZROWDd69KrZuYJ.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 18,
      name: "Drama"
    }
  ],
  homepage: "http://sonyclassics.com/saintlaurent/",
  id: 221667,
  imdb_id: "tt2707848",
  original_language: "fr",
  original_title: "Saint Laurent",
  overview: "1967-1976. As one of history's greatest fashion designers entered a decade of freedom, neither came out of it in one piece.",
  popularity: 7.94,
  poster_path: "/xDXKPeCyKuWJIKfFSAYsppKWsgW.jpg",
  production_companies: [
    {
      id: 6896,
      logo_path: "/2Q89KvzxTKB5BAv9RqFIPI1qb7E.png",
      name: "EuropaCorp",
      origin_country: "FR"
    },
    {
      id: 12096,
      logo_path: null,
      name: "Mandarin Film",
      origin_country: "CN"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "FR",
      name: "France"
    }
  ],
  release_date: "2014-09-23",
  revenue: 0,
  runtime: 150,
  spoken_languages: [
    {
      iso_639_1: "fr",
      name: "Français"
    }
  ],
  status: "Released",
  tagline: "The story that has never been told before",
  title: "Saint Laurent",
  video: false,
  vote_average: 6.2,
  vote_count: 239
}

export const detailsErrorStub: MoviesDetailsApiResponseError = {
  success: false,
  status_code: 34,
  status_message: "The resource you requested could not be found."
}
