import { SELECT_SUBREDDIT } from '../actions';

const initialState = 'reactjs';

const selectedSubreddit = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
};

export default selectedSubreddit;
