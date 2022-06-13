import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import coeposts from './coePosts'
import citposts from './citPosts';
import coorposts from './coorPosts';
import cosposts from './cosPosts'

export const reducers = combineReducers({ posts, auth, coeposts, citposts, coorposts, cosposts });
