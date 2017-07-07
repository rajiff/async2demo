function insert(data, callbackFunction) {
  setTimeout(function() {
    callbackFunction(null, `1. Inserting data ${data}`);
  }, 2000);
}

function query(keyname, callbackFunction) {
  setTimeout(function() {
    callbackFunction(null, `2. Querying data with key  ${keyname}`);
  }, 1000);
}

function update(keyname, callbackFunction) {
  setTimeout(function() {
    callbackFunction(null, `3. Update data with key  ${keyname}`);
  }, 2000);
}

function deleteData(keyname, callbackFunction) {
  setTimeout(function() {
    callbackFunction(null, `4. Deleting the data with key  ${keyname}`);
  }, 3000);
}

function calvin() {
  console.log("Program is starting now..!");
  let data = { "name": "Rajeshwari" };

  insert(data, function(err, result) { console.log(result); });

  query("Rajeshwari", function(err, result) { console.log(result); });

  update("Rajeshwari", function(err, result) { console.log(result); });

  deleteData("Rajeshwari", function(err, result) { console.log(result); });

  console.log("Done..!");
}

calvin();
