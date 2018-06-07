function loadpic(name) {
	var elem = document.createElement("img");

	elem.setAttribute("src", "images/"+name+".jpg");
	elem.setAttribute("alt", name);
	document.getElement.ById(name).appendChild(elem);
}

/*
*	Returns top 10 draft picks as a JSON object.
*/

function loadFile() {
	var fs = require("fs");
	var content = fs.readFileSync("player10.json");
	return JSON.parse(content);
}

/*
*	Pass in output from loadFile <-- it's a JSON object. Pass in last name.
*	Returns Player object with attributes:
*		points,
*		rebounds,
*		steals,
*		blocks,
*		minutes,
*		assists
*/

function findPlayer(lastName, jsonObject) {
	var player_dict = jsonObject[lastName];
	var player = {
		points: player_dict["PPG"],
		rebounds: parseFloat(player_dict["ORB"]) + parseFloat(player_dict["DRB"]),
		steals: player_dict["SPG"],
		blocks: player_dict["BPG"],
		minutes: player_dict["MPG"],
		assists: player_dict["APG"]
	};
	return player;
}

var jsonObject = loadFile();
var doncic = findPlayer("doncic", jsonObject);
console.log(doncic);
