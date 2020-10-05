let welcome = require('./welcome')

welcome(process.env.NODE_ENV)

exports.welcome = welcome;