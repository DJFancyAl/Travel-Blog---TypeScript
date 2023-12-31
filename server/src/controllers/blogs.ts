// Dependencies
import express from 'express';
require('dotenv').config()
const router = require('express').Router()
import { validateToken } from '../JWT'
import { Blog, Author, Comment } from '../models'

// Get All Blogs
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const foundBlogs = await Blog.find().sort({ date: 'desc'})
        .populate('author')
        const foundAuthors = await Author.find()
        res.status(200).json({blogs: foundBlogs, authors: foundAuthors})
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Blog View with comments
router.get('/:id', async (req: express.Request, res: express.Response) => {
    try{
        const foundBlog = await Blog.findById(req.params.id)
        .populate('author')
        .populate('comments')
        .populate({
            path: 'comments',
            populate: { path: 'author', select: ['name', 'pic']}
        })
        res.status(200).json(foundBlog)
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Create Blog
router.post('/', validateToken, async (req: express.Request, res: express.Response) => {
    try {
        const createdBlog = await Blog.create(req.body)
        res.status(200).json(createdBlog)
     } catch (err) {
        res.status(400).json({error: err})
     }
})

// Update Blog
router.put('/:id', validateToken, async (req: express.Request, res: express.Response) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: "Updated Blog"})
    } catch (err) {
        res.status(400).json({error: err})
    }
})

// Delete Blog
router.delete('/:id', validateToken, async (req: express.Request, res: express.Response) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Blog Deleted!"})
    } catch (err) {
        res.status(400).json({error: err})
     }
})

// Wildcard
router.get('*', (req: express.Request, res: express.Response) => {
    res.status(404).json({error: "Page not found."})
})


// Export
module.exports = router