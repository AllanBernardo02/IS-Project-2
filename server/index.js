
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import coeRoutes from "./routes/coePosts.js"
import citRoutes from './routes/citPosts.js';
import coorRoutes from './routes/coorPosts.js';
import cosRoutes from './routes/cosPosts.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use('/coeposts', coeRoutes)
app.use('/citposts', citRoutes)
app.use('/coorposts',coorRoutes)
app.use('/cosposts', cosRoutes)
// original db
// const CONNECTION_URL = 'mongodb+srv://js_mastery:M6WfDnJEoj9HkV2d@practice.jto9p.mongodb.net/memories_app?retryWrites=true&w=majority';

const CONNECTION_URL = 'mongodb+srv://kmjzmn:kimjazmin0630@cluster0.8lvsi.mongodb.net/?retryWrites=true&w=majority' ;
   
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);