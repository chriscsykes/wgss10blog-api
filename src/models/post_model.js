import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostModelSchema = new Schema({
  title: String,
  tags: String,
  preview: String,
  content: String,
  coverUrl: String,
  authorName: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

// create PostModel class from schema
const PostModel = mongoose.model('Post', PostModelSchema);

export default PostModel;
