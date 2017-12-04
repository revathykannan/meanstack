const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: process.env.databaseUri, // Databse URI and database name
 uri:'mongodb://venkat:venkat@ds129166.mlab.com:29166/employees',
// uri:'mongodb://loukya:loukya@ds259855.mlab.com:59855/meandemoemp',
  //uri:newFunction(),
 //var config = "mongodb://localhost:27017/employees";
  secret: crypto, // Cryto-created secret
  db: 'employees' // Database name
  //'db': 'employees' 
}






