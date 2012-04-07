var defaults = require('./defaults.json'),
    neo4j = require('node-neo4j');
	mongode = require('mongode');

exports.neo4j = new neo4j(defaults.neo4j);

exports.mongo = mongode.connect(defaults.mongo);
