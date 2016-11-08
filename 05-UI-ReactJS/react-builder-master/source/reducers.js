import {MOVIE_INPUT, MOVIE_LIST, MOVIE_EDIT, INITIALIZE_STATE} from './actions'

function handleM(state = [ { movies: {} } ], action) {

  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {

    case INITIALIZE_STATE:
      state = movies;
      return(state);

    case MOVIE_INPUT:
    state.push(action.movie);
    localStorage.setItem("movieStorage", JSON.stringify(state));
    return (state)

    case MOVIE_EDIT:
       state[action.movie.index] = action.movie
       localStorage.setItem("movieStorage", JSON.stringify(state));
       return(state)

    case MOVIE_LIST:

    default:
      return state;
  }
}

export default handleM;
