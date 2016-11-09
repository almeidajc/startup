import {MOVIE_INPUT, MOVIE_EDIT, MOVIE_DELETE, INITIALIZE_STATE} from './actions'

function handleM(state = [ { movies: {} } ], action) {

  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {

    case INITIALIZE_STATE:
      state = movies;
      return state;

    case MOVIE_INPUT:
    state.push(action.movie);
    localStorage.setItem("movieStorage", JSON.stringify(state));
    return state;

    case MOVIE_EDIT:
       state[action.movie.index] = action.movie
       localStorage.setItem("movieStorage", JSON.stringify(state));
       return state;

    case MOVIE_DELETE:
      let indexA = action.index;
      state = state.filter( function (state) {
        return state.id !== indexA
      }, indexA);
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return state;
    default:
      return state;
  }
}

export default handleM;
