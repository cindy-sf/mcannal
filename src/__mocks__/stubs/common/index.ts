import type { MultiSearchApiResponse, MultiSearchMovies, MultiSearchShows } from '@src/types/common'

interface MultiSearStubType extends MultiSearchApiResponse {
  results: (MultiSearchMovies | MultiSearchShows)[]
}

export const multiSearchStub: MultiSearchApiResponse = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
      genre_ids: [
        28,
        12,
        35,
        14
      ],
      id: 451048,
      media_type: "movie",
      original_language: "en",
      original_title: "Jungle Cruise",
      overview: "Sur le fleuve Amazone, le capitaine d'un bateau embarque à bord une scientifique et son frère dans le but de retrouver un arbre auquel on prête des pouvoirs guérisseurs. Le trio va croiser de nombreux obstacles sur sa route, notamment une expédition concurrente.",
      popularity: 349.272,
      poster_path: "/oNpOXf051HjxgQ3OOYWYzGU6DJt.jpg",
      release_date: "2021-07-28",
      title: "Jungle Cruise",
      video: false,
      vote_average: 7.6,
      vote_count: 4104
    },
    {
      adult: false,
      id: 500,
      media_type: "person",
      profile_path: "/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg"
    },
    {
      backdrop_path: "/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg",
      first_air_date: "2010-10-31",
      genre_ids: [
        10759,
        18,
        10765
      ],
      id: 1402,
      media_type: "tv",
      name: "The Walking Dead",
      origin_country: [
        "US"
      ],
      original_language: "en",
      original_name: "The Walking Dead",
      overview: "Après une apocalypse, ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes, mené par le shérif adjoint Rick Grimes, tente de survivre... Ensemble, ils vont devoir, tant bien que mal, faire face à ce nouveau monde, devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.",
      popularity: 1601.116,
      poster_path: "/4UZzJ65UxR6AsKL6zjFWNYAKb3w.jpg",
      vote_average: 8.1,
      vote_count: 12787
    },
  ],
  total_pages: 12,
  total_results: 225
}

export const multiSearchWithoutPeopleStub: MultiSearStubType = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
      genre_ids: [
        28,
        12,
        35,
        14
      ],
      id: 451048,
      media_type: "movie",
      original_language: "en",
      original_title: "Jungle Cruise",
      overview: "Sur le fleuve Amazone, le capitaine d'un bateau embarque à bord une scientifique et son frère dans le but de retrouver un arbre auquel on prête des pouvoirs guérisseurs. Le trio va croiser de nombreux obstacles sur sa route, notamment une expédition concurrente.",
      popularity: 349.272,
      poster_path: "/oNpOXf051HjxgQ3OOYWYzGU6DJt.jpg",
      release_date: "2021-07-28",
      title: "Jungle Cruise",
      video: false,
      vote_average: 7.6,
      vote_count: 4104
    },
    {
      backdrop_path: "/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg",
      first_air_date: "2010-10-31",
      genre_ids: [
        10759,
        18,
        10765
      ],
      id: 1402,
      media_type: "tv",
      name: "The Walking Dead",
      origin_country: [
        "US"
      ],
      original_language: "en",
      original_name: "The Walking Dead",
      overview: "Après une apocalypse, ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes, mené par le shérif adjoint Rick Grimes, tente de survivre... Ensemble, ils vont devoir, tant bien que mal, faire face à ce nouveau monde, devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.",
      popularity: 1601.116,
      poster_path: "/4UZzJ65UxR6AsKL6zjFWNYAKb3w.jpg",
      vote_average: 8.1,
      vote_count: 12787
    },
  ],
  total_pages: 12,
  total_results: 225
}

export const filteredMultiSearchStub: (MultiSearchMovies | MultiSearchShows)[] = [
  {
    adult: false,
    backdrop_path: "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
    genre_ids: [
      28,
      12,
      35,
      14
    ],
    id: 451048,
    media_type: "movie",
    original_language: "en",
    original_title: "Jungle Cruise",
    overview: "Sur le fleuve Amazone, le capitaine d'un bateau embarque à bord une scientifique et son frère dans le but de retrouver un arbre auquel on prête des pouvoirs guérisseurs. Le trio va croiser de nombreux obstacles sur sa route, notamment une expédition concurrente.",
    popularity: 349.272,
    poster_path: "/oNpOXf051HjxgQ3OOYWYzGU6DJt.jpg",
    release_date: "2021-07-28",
    title: "Jungle Cruise",
    video: false,
    vote_average: 7.6,
    vote_count: 4104
  },
  {
    backdrop_path: "/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg",
    first_air_date: "2010-10-31",
    genre_ids: [
      10759,
      18,
      10765
    ],
    id: 1402,
    media_type: "tv",
    name: "The Walking Dead",
    origin_country: [
      "US"
    ],
    original_language: "en",
    original_name: "The Walking Dead",
    overview: "Après une apocalypse, ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes, mené par le shérif adjoint Rick Grimes, tente de survivre... Ensemble, ils vont devoir, tant bien que mal, faire face à ce nouveau monde, devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.",
    popularity: 1601.116,
    poster_path: "/4UZzJ65UxR6AsKL6zjFWNYAKb3w.jpg",
    vote_average: 8.1,
    vote_count: 12787
  },
]
