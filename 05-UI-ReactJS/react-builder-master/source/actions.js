const MOVIE_INPUT = 'movie_input';
const MOVIE_LIST = 'movie_list';
const MOVIE_EDIT = 'movie_edit';
const INITIALIZE_STATE = 'initialize_state';

export function movieInput(movie) {
  return { type: MOVIE_INPUT, movie: movie }
}

export function movieEdit(movie , index) {
  return { type: MOVIE_EDIT, movie, index }
}

export function movieList() {
  return { type: MOVIE_LIST }
}

export function initializeState() {
  return { type: INITIALIZE_STATE}
}

export {MOVIE_INPUT, MOVIE_LIST, MOVIE_EDIT, INITIALIZE_STATE };
