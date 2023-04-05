const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const postCollection = client.db('startup').collection('post');

function addPost(post) {
    postCollection.insertOne(post);
}

function getPosts() {
    const options = {
      sort: {score: -1},
      limit: 10,
    };
    const cursor = postCollection.find();
    return cursor.toArray();
}
  
module.exports = {addPost, getPosts};