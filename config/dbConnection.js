const mongoose = require('mongoose');

const connectDb= async () => {
mongoose.connect(process.env.CONNECTION_STING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
};

module.exports = connectDb;
