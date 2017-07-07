const async = require('async');

//Callback chaining using Async.js

function insert(data, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 1");
    callbackFunction(null, `1. Inserting data ${data}`);
  }, 2000);
}

function query(keyname, prevTaskResult, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 2");
    callbackFunction(null, `${prevTaskResult}\n2. Querying data with key  ${keyname}`);
  }, 1000);
}

function update(keyname, prevTaskResult, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 3");
    callbackFunction(null, `${prevTaskResult}\n3. Update data with key  ${keyname}`);
  }, 2000);
}

function deleteData(keyname, prevTaskResult, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 4");
    callbackFunction(null, `${prevTaskResult}\n4. Deleting the data with key  ${keyname}`);
    // callbackFunction(null, `This is the last step`);
  }, 3000);
}

function apiCall(data, prevTaskResult, callbackFunction) {
  setTimeout(function() {
    console.log("\t\t\t 5");
    callbackFunction(null, `${prevTaskResult}\n5. Calling API with ${data}`);
  }, 5000);
}

function foobar(data, cb) {
  let foo = "This is " + data.name; cb(null, foo);
}

function calvin() {
  console.log("Program is starting now..!");
  let data = { "name": "Rajeshwari" };

  // let tasksArray = [];
  // tasksArray.push(foobar.bind(null, data));

  // async.waterfall([foobar.bind(null, data)], function(err, results){
  async.waterfall([
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
