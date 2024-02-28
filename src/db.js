const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToDatabase = async () => {
  if (!client.isConnected()) await client.connect();
  return client.db('my-react-app');
};

export default connectToDatabase;