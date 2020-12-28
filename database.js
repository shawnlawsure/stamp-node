var mySql = require('mysql');

var database = 
{
	connection: function()
	{
		return mySql.createConnection(
		{
			host: "localhost",
			user: 'root',
			password: 'Treble1!',
			database: 'stamps',
			multipleStatements: true
			//insecureAuth : true,
			//port: 3306
		});
	},

	query: function(sql, con)
	{
		let dbCon = con ? con : this.connection();

		let result;
		dbCon.query(sql, function (err, res)
		{
			if (!con)
				dbCon.end();
			
			if (err) 
			{
				console.log("Error");
				throw err;
			}

			result = res;
		}).then()
		{
			return result;
		}

		//return result;
	}
};

module.exports = database