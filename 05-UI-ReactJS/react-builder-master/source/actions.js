const MOVIE_INPUT = 'movie_input';
const MOVIE_EDIT = 'movie_edit';
const MOVIE_DELETE = 'movie_delete';
const INITIALIZE_STATE = 'initialize_state';

export function movieInput(movie) {
  return { type: MOVIE_INPUT, movie: movie }
}

export function movieEdit(movie , index) {
  return { type: MOVIE_EDIT, movie, index }
}

export function movieDelete(index) {
 return { type: MOVIE_DELETE, index }
}

export function initializeState() {
  return { type: INITIALIZE_STATE}
}

export {MOVIE_INPUT,MOVIE_EDIT, MOVIE_DELETE, INITIALIZE_STATE };
