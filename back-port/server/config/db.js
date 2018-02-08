import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/portafolioDB');
  mongoose.connection
    .once('open', () => console.log('Moongodb running'))
    .on('error', err => console.error(err));
};

