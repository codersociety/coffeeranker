//var defaults = require('./localdbs.json');			// Local Database
var defaults = require('./defaults.json');				// Live Database
var neo4j = require('node-neo4j');
var	mongode = require('mongode');

exports.neo4j = new neo4j(defaults.neo4j);

exports.mongo = mongode.connect(defaults.mongo);
