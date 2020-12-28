var db = require('../database');

exports.testGet = function(req, res) {

	var con = db.connection();
	con.query("SELECT ValueId, ValueCode, ValueText FROM lookups WHERE LookupCode = 'HOU'", function (err, data)
	{
		con.end();
		
		if (err) 
		{
			console.log("Error");
			throw err;
		}

		res.json(data);
	});

	/*var result = db.query("SELECT ValueId, ValueCode, ValueText FROM lookups WHERE LookupCode = 'HOU'");
	//console.log("Result: " + result[1].ValueCode);
	console.log("Result: ", result);*/

    //var testObj = { field1: "Field 1 Changed", field2: "Field 2"};

    //res.json(testObj);

};