import Post from '../models/post_model';

// createPost code given in lab instructions
export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.author = req.user;
  post.content = req.body.content;
  post.imageURL = req.body.imageURL;
  post.coverUrl = req.body.coverUrl;
  post.authorName = req.body.authorName;
  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// adapted from: https://mongoosejs.com/docs/api.html#model_Model.find
export const getPosts = (req, res) => {
  Post.find().then((result) => {
    res.json(result.map((post) => {
      return {
        id: post._id, title: post.title, tags: post.tags, imageURL: post.imageURL, coverUrl: post.coverUrl, author: post.authorName,
      };
    }));
  }).catch((error) => {
    res.status(500).json({ error });
  });
};

// adapted from: https://mongoosejs.com/docs/api.html#model_Model.findById
export const getPost = (req, res) => {
  Post.findById(req.params.id)
    .populate('author')
    .then((result) => {
      res.send(result);
    }).catch((error) => {
      res.status(500).json({ error });
    });
};

// adapted from: https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete
export const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};

// adapted from:https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
export const updatePost = (req, res) => {
  const options = { new: true };
  Post.findByIdAndUpdate(req.params.id, req.body, options).then((result) => {
    res.json(result);
  }).catch((error) => {
    res.status(500).json({ error });
  });
};
