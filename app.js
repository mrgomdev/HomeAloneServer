var express=require("express");
var app=express();
var body_parser=require("body-parser");

var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/homealone");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connectino error:'));

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

var notice=require("./notice.js");
var feed=require("./feed.js");
notice(app);
feed(app);

app.get("/",function(req, res) {
	console.log("Hello");
	res.write("Hello");
	res.end();
});

db.once('open',function() {
	conole.log("mongodb connected");
});
var port = 12016;
app.listen(12016,function() {
	console.log("Listening " + port);
});