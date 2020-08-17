import mongoose, { Schema } from 'mongoose';

const bcrypt = require('bcryptjs');

// create a PostSchema with a title field
const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  username: { type: String },
}, {
  toObject: { virtuals: true },
  toJSON: {
    virtuals: true,
    transform(doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
      return ret;
    },
  },
  timestamps: true,
});

UserSchema.pre('save', function beforeyYourModelSave(next) {
  // this is a reference to our model
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  // overwrite plain text password with encrypted password
  user.password = hash;
  return next();
});

//  note use of named function rather than arrow notation
//  this arrow notation is lexically scoped and prevents binding scope, which mongoose relies on
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  // this is a reference to our model
  const user = this;

  bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    } else {
      return callback(null, isMatch);
    }
  });
};

// create PostModel class from schema
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
