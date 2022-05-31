import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import coeposts from './coePosts'
import citposts from './citPosts';

export const reducers = combineReducers({ posts, auth, coeposts, citposts });
