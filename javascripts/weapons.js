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

