import { ARTICLE_INPUT, ARTICLE_DELETE, INITIALIZE_STATE } from './actions'

function storeArt(state = [ { article: {} } ], action) {

  let articles = JSON.parse(localStorage.getItem("articleStorage")) || [];
  switch (action.type) {

    case INITIALIZE_STATE:
      state = movies;
      return state;

    case ARTICLE_INPUT:
    state.push(action.movie);
    localStorage.setItem("articleStorage", JSON.stringify(state));
    return state;

    case ARTICLE_DELETE:
      let indexA = action.index;
      state = state.filter( function (state) {
        return state.id !== indexA
      }, indexA);
      localStorage.setItem("articleStorage", JSON.stringify(state));
      return state;

    default:
      return state;
  }
}

export default storeArt;
