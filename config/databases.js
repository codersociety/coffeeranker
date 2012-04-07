var defaults = require('./defaults.json'),
    neo4j = require('node-neo4j');

exports.neo4j = new neo4j(defaults.neo4j);
