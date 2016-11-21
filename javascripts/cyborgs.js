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