const ARTICLE_INPUT = 'article_input';
const ARTICLE_DELETE = 'article_delete';
const INITIALIZE_STATE = 'initialize_state';

export function initializeState() {
  return { type: INITIALIZE_STATE}
}

export function articleInput(article) {
  return { type: ARTICLE_INPUT, article: article }
}


export function articleDelete(index) {
 return { type: ARTICLE_DELETE, index }
}

export { ARTICLE_INPUT, ARTICLE_DELETE, INITIALIZE_STATE };
