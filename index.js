dbs = require('./config/databases')

// Usage notes: https://github.com/philippkueng/node-neo4j

dbs.neo4j.InsertNode({
  name: 'Darth Vader',
  sex: 'male'
},function(err, node){
  if(err) throw err;
  // Output node properties.
  console.log(node.data);
  // Output node id.
  console.log(node.id);
});