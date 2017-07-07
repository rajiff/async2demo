const async = require('async');

//Callback chaining using Async.js

function insert(data, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 1");
    callbackFunction(null, `1. Inserting data ${data}`);
  }, 2000);
}

function query(keyname, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 2");
    callbackFunction(null, `2. Querying data with key  ${keyname}`);
  }, 1000);
}

function update(keyname, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 3");
    callbackFunction(null, `3. Update data with key  ${keyname}`);
  }, 2000);
}

function deleteData(keyname, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 4");
    callbackFunction(null, `4. Deleting the data with key  ${keyname}`);
  }, 3000);
}

function apiCall(data, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 5");
    callbackFunction(null, `5. Calling API with ${data}`);
  }, 5000);
}

function foobar(data, cb) {
  let foo = "This is " + data.name; cb(null, foo);
}

function calvin() {
  console.log("Program is starting now..!");
  let data = { "name": "Rajeshwari" };

  async.parallel([
      insert.bind(null, data),
      apiCall.bind(null, data),
      query.bind(null, "Rajeshwari"),
      update.bind(null, "Rajeshwari"),
      deleteData.bind(null, "Rajeshwari")
    ], function(err, results){
    console.log("All tasks done ");
    if(err) {
      console.log("Error ", err);
      return;
    }
    console.log("Results ", results);
  });
} //end of function

calvin();
