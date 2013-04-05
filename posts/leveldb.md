## LevelDB

![@dominictarr](http://i.imgur.com/AxuKdQE.png)

### What is it?
LevelDB is a very fast and lightweight embedded database. It was created by two Google engineers and is inpired by BigTable, Google's proprietary file system. You are probably using it without knowing it since it's part of the Chrome browser. It's exposed as [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB) and used for web apps that need to work offline by saving data inside the user's browser.

Other databases in the embedded category are BerkelyDB and SQLite (it's important to point out the LevelDB is faster).
By embedded it means you don't run it as one of the popular databases you are used to such as MySQL, MongoDB or Redis.
LevelDB is contained within your application process and can't be accessed from other process.
It is literally just a file based store of key value pairs that does some fancy caching and compression.

If we compare it to Redis, it's even lighter, have more reliable writes and unlike Redis, you don't store your data in memory. Redis have more data structures (sets, lists etc) that LevelDB is lacking.  The similarity is that both are key-value store and both can save json.

### Example
Let's dive right in. Here is an example of adding 2 blog posts and reading all the db using streams:

```js
var levelup = require('levelup')
var db = levelup('./mydb')

db.put('post!' + Date.now(), {author: 'josh', date: 'today'}, {encoding:'json'}, function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  db.put('post!' + Date.now(), {author: 'jake', date: 'today'}, {encoding:'json'}, function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error

    // to get a stream of all posts in reverse chronological order
    db.createReadStream({ reverse: true, encoding: 'json' })
     .on('data', function (data) {
        console.log(data.key, '=', data.value)
      })
      .on('error', function (err) {
        console.log('Oh my!', err)
      })
      .on('close', function () {
        console.log('Stream closed')
      })
      .on('end', function () {
        console.log('Stream ended')
      })
  })
});
```

Notice that we never run a seperate process for our DB. All we did is requiring levelup (the most popular node packages for LevelDB) and calling the leveldb function with the location that we want our database to live.
It will create a folder called mydb with the database's content.
The [API](https://github.com/rvagg/node-levelup#api) is very simple - put, get, del and a few streaming functions.

The nice thing about using leveldb when used with node.js is that node can take you very far with only single a process. Leveldb is thread-safe which means that all the libuv threads that run in parallel in a typical node app will make reading and writing to leveldb very fast. In addition, reading is using streams which feels as if you are using a node core module - an indication that the author of levelup really knows what he is doing.

### Safety
LevelUP is very safe. even if the node process crashed, as long as the write operation was sent to the file system it will make it.
In addition, you can use the sync option when you send a write. when doing that, your callback will not be called unless the write was sucessful (will slow the writes):

```js
db.put(foo, '123' , {sync: true}, callback)
```

The only time when writes can get lost is an OS crash. if that happens it might create a partially written log. when level db recovers it uses checksums to detect it and it will ignore them. If you want to protect against situation like this you can use an external package call level-hooks that gives you an opportunity to direct writes to multiple locations or add a level of redundancy on to of leveldb.

### Backup
You got two options when it comes to backing up the data:  
1. Close the db and copy the whole directory.   
If you can't close, a copy should be ok still but there's a small risk you'll catch it in the middle of a compaction.  
Even if you do catch it in a midway state then there's a repair() function you can use in levelup 0.7 - `levelup.repair(location, callback)`

2. Open 2 dbs and stream the entire db into the other:

```js
function copy (srcdb, dstdb, callback) {
  srcdb.createReadStream().pipe(dstdb.createWriteStream()).on('close', callback)
}
```
