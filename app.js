var express = require("express"),
	app = express(),
	fs = require("fs"),
	ejs = require("ejs"),
	// pdf = require("pdf"),
	path= require("path"),
	request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",function(req,res){
	res.send("FAREWELL 2020");
})
app.get("/farewell/:id",function(req,res){
	var id = req.params.id;
	var url = "http://www.dtufarewell2020.in/index.php/welcome/individualscribbles/" + id;
	request(url, function(err,response,body){
		if(!err && response.statusCode == 200){
			var bdata = JSON.parse(body);
			
			res.render("index",{data:bdata});
		}
	})
})
app.listen(3000, function(){
	console.log("Yearbook is ready");
})