(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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








},{"./Model.js":2,"./View.js":3,"./cyborgs.js":4,"./weapons.js":5}],2:[function(require,module,exports){
"use strict";

const View = require("./View.js");


},{"./View.js":3}],3:[function(require,module,exports){
"use strict";
},{}],4:[function(require,module,exports){
"use strict";

// Define the base object for any Cyborg, whether player one or player 2

const Battlefield = function() {
	let Battlefield = {};

	Battlefield.Cyborgs = {};

	Battlefield.Cyborgs.Player = function() {
		this.playerName = null;
		this.type = null;
		this.skill = null;
		this.weapon = null;
		this.health = null;

		this.setName = (name) => {
			this.playerName = name;
		};
		this.setType = (newType) =>{
			this.type = newType;
		};
		this.setSkill = (newSkill) =>{
			this.skill = newSkill;
		};
		this.setWeapon = (newWeapon) =>{
			this.weapon = newWeapon;
		};

		this.toString = () => {
			let output = `${this.playerName} is a ${this.type} who specializes in ${this.skill} and carries a ${this.weapon}.  Currently, ${this.playerName} has ${this.health} health points.`;
			return output;
			};
	};


	Battlefield.Armory = {};

	Battlefield.Armory.BaseType = function(){
		this.name = "";
		this.getRandomHealth = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
			};
// THIS IS MY TERMINATOR TYPES AND SKILLS
	Battlefield.Armory.Terminator = function() {
		this.health = null;
	};
	Battlefield.Armory.Terminator.prototype = new Battlefield.Armory.BaseType();

	Battlefield.Armory.Infiltrator = function() {
		this.name = "Infiltrator";
		this.health = this.getRandomHealth(75, 200);
			};
	Battlefield.Armory.Infiltrator.prototype = new Battlefield.Armory.Terminator();

	Battlefield.Armory.Destroyer = function() {
		this.name = "Destroyer";
		this.health = this.getRandomHealth(100, 250);
	};
	Battlefield.Armory.Destroyer.prototype = new Battlefield.Armory.Terminator();
// THIS IS MY CYLON TYPES AND SKILLS

Battlefield.Armory.Cylon = function() {
		this.health = 0;
	};
	Battlefield.Armory.Cylon.prototype = new Battlefield.Armory.BaseType();
	Battlefield.Armory.Spy = function() {
		this.name = "Spy";
		this.health = this.getRandomHealth(50, 150);
	};
	Battlefield.Armory.Spy.prototype = new Battlefield.Armory.Cylon();

	Battlefield.Armory.Combatant = function() {
		this.name = "Combatant";
		this.health = this.getRandomHealth(125, 230);
	};
	Battlefield.Armory.Combatant.prototype = new Battlefield.Armory.Cylon();

// THIS IS MY ROBOCOP TYPES AND SKILLS

	Battlefield.Armory.Robocop = function() {
		this.health = 0;
	};
	Battlefield.Armory.Robocop.prototype = new Battlefield.Armory.BaseType();
	Battlefield.Armory.Enforcer = function() {
		this.name = "Enforcer";
		this.health = this.getRandomHealth(90, 210);
	};
	Battlefield.Armory.Enforcer.prototype = new Battlefield.Armory.Robocop();

	Battlefield.Armory.Protector = function() {
		this.name = "Protector";
		this.health = this.getRandomHealth(75, 170);
	};
	Battlefield.Armory.Protector.prototype = new Battlefield.Armory.Robocop();

	return Battlefield;
};

module.exports = Battlefield;
},{}],5:[function(require,module,exports){
"use strict";

const Weapon = () => {
  this.name = "";
  this.damage = null;

  this.toString = () => {
    return this.name;
  };
// function to perform damage calculation
  Weapon.getRandomDamage = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
// weapon choices
  const laserPistol = () => {
    this.name = "Laser Pistol";
    this.damage = this.getRandomDamage(25, 40);
  };
  laserPistol.prototype = new Weapon();

  const plasmaRay = () => {
    this.name = "Plasma Ray";
    this.damage = this.getRandomDamage(15, 50);
  };
  plasmaRay.prototype = new Weapon();

  const gatlingGun = () => {
    this.name = "Gatling Gun";
    this.damage = this.getRandomDamage(1, 60);
  };
  gatlingGun.prototype = new Weapon();

  const laserRifle = () => {
    this.name = "Laser Rifle";
    this.damage = this.getRandomDamage(15, 40);
  };
  laserRifle.prototype = new Weapon();

};

module.exports = Weapon;


},{}]},{},[1]);
