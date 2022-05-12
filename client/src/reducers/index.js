import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import coeposts from './coePosts'

export const reducers = combineReducers({ posts, auth, coeposts });
