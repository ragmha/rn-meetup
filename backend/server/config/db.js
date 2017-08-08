import mongoose from 'mongoose';
const uri = 'mongodb://localhost/meetup';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(uri, {
    useMongoClient: true,
  });
  mongoose.connection
    .on('error', err => console.error(err))
    .once('open', () => console.log('MongoDB running'));
};
