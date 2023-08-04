// Dependencies
require('dotenv').config()
import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  throw new Error('MONGO_URI is not defined in the environment.');
}

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(()=>console.log('MongoDB connected'))
.catch(e=>console.log(e));

export const Blog = require('./blogs.ts')
export const Author = require('./authors.ts')
export const Comment = require('./comments.ts')