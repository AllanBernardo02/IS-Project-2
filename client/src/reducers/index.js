import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import coeposts from './coePosts'
import citposts from './citPosts';
import coorPosts from './coorPosts';

export const reducers = combineReducers({ posts, auth, coeposts, citposts, coorPosts });
