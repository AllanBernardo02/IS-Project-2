import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import coeposts from './coePosts'
import citposts from './citPosts';
import coorposts from './coorPosts';
import cosposts from './cosPosts'
import authStudent from './authStudent'

export const reducers = combineReducers({ posts, auth, authStudent, coeposts, citposts, coorposts, cosposts });
