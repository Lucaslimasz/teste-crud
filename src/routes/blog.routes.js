const express = require('express')

const BlogRouter = express.Router()

const PostController = require('../app/controllers/PostController')

BlogRouter.get('/posts', PostController.index)
BlogRouter.get('/posts/:id', PostController.show)
BlogRouter.post('/posts', PostController.store)
BlogRouter.put('/posts/:id', PostController.update)
BlogRouter.delete('/posts/:id', PostController.destroy)

module.exports = BlogRouter