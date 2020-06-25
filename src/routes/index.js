const express = require('express')

const blogRouter = require('./blog.routes')

const routes = express.Router()

routes.use('/api', blogRouter)

module.exports = routes