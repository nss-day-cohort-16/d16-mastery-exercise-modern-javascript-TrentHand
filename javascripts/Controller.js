"use strict";

const Weapon = require("./weapons.js"),
			Battlefield = require("./cyborgs.js"),
			Model = require("./Model.js"),
			View = require("./View.js");

let BF = new Battlefield();

let Player1 = new BF.Cyborgs.Player();
let Player2 = new BF.Cyborgs.Player();

// EVLS
$("#name_button").click( () =>  {
	Player1.setName($('#player1NameInput').val());
	Player2.setName($('#player2NameInput').val());

	$("#player_names").addClass("hidden");
	$("#robot_type").removeClass("hidden");
	console.log("Play", Player1);
	console.log("Play2", Player2);

});


$("#type_button").click( () => {
	let p1type = $("input[name='type']:checked").val();
	let p2type = $("input[name='type2']:checked").val();
	console.log("p1type", p1type);
	console.log("p2type", p2type);
	$("#robot_type").addClass("hidden");
	$("#robot_class").removeClass("hidden");
});


$("#class_button").click( () => {
	let p1class = $("input[name='class']:checked").val();
	let p2class = $("input[name='class2']:checked").val();
	console.log("p1class", p1class);
	console.log("p2class", p2class);

	$("#robot_class").addClass("hidden");
	$("#combat_screen").removeClass("hidden");
});

$("#terminators").click( () =>  {
});







