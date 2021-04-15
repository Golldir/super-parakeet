/* jslint node: true */
/* jshint browser: true */
"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний просмотренный фильм?', ''),
      b = prompt('Ваща оценка фильму?', ''),
      c = prompt('Последний просмотренный фильм?', ''),
      d = prompt('Ваща оценка фильму?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

