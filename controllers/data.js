var db = require('../database');

exports.saveStamp = function(req, res) {

	var con = db.connection();

	//console.log(req);

	con.query("CALL sp_SaveStamp(?, ?, ?, ?, ?, @newId); SELECT @newId AS newId;", 
		[	
			req.body.id ? req.body.id : null,
			req.body.denomination, 
			req.body.description, 
			req.body.year, 
			req.body.color,
			req.body.image
		], 
	function (err, data)
	{
		con.end();

		if (err) 
		{
			console.log("Error");
			res.send(err.message);
			throw err;
		}
		
		res.send(data[1][0].newId.toString());
	});
};

exports.saveStampImage = function(req, res) {

	var con = db.connection();

	console.log(req);

	res.send("success");

	return;

	con.query("CALL sp_SaveStampImage(?, ?)",
		[	
			req.body.id, 
			req.body.file, 
		], 
	function (err, data)
	{
		con.end();

		if (err) 
		{
			console.log("Error");
			res.send(err.message);
			throw err;
		}
		
		res.send("success");
	});
};

exports.getStampList = function(req, res) {

	var con = db.connection();
	con.query("SELECT * FROM vwStamps", function (err, data)
	{
		con.end();
		
		if (err) 
		{
			console.log("Error");
			throw err;
		}

		res.json(data);
	});

};

exports.getIntake = function(req, res) {

	var con = db.connection();
	con.query("SELECT * FROM vwIntakes WHERE iD = ?", req.params.id, function (err, data)
	{
		con.end();
		
		if (err) 
		{
			console.log("Error");
			throw err;
		}

		res.json(data);
	});

};
