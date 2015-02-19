
// Saves blocks on minimongo for easier tracking

Blocks = new Mongo.Collection('blocks', {connection: null});
new PersistentMinimongo(Blocks);

