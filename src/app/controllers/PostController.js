const Post = require('../models/Posts')

module.exports = {
    async index(_req, res){
        const posts = await Post.find()

        return res.json(posts)
    },
    async show(req, res){
      const { id } = req.params
        
      post = await Post.findById(id)
        
      return res.json(post)
    },
    async store(req, res){
      const { title, description } = req.body

      const post = await Post.create({ title, description })

      return res.json(post);
    },
    async update(req, res){
      const { id } = req.params
      const { title, description } = req.body

      const post = await Post.findByIdAndUpdate(id, 
        {
          title, 
          description
        }, 
        { new: true}
      )

      return res.json(post)
    },
    async destroy(req, res){
        await Post.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
