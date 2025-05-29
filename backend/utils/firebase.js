const admin = require("firebase-admin");
require("dotenv").config(); 

// Parse the entire JSON string from the environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// IMPORTANT: Fix the private_key to convert \\n to actual \n
//    This is the core of the fix for your error.
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;