
// Saves blocks on minimongo for easier tracking

Blocks = new Mongo.Collection('blocks', {connection: null});
new PersistentMinimongo(Blocks);

Rewards = new Mongo.Collection('rewards', {connection: null});
new PersistentMinimongo(Rewards);

Hashrate = new Mongo.Collection('hashrate', {connection: null});
new PersistentMinimongo(Rewards);
