//var canvas = document.getElementById('display').getContext('2d');

function update(){
  //Update tick... run calculations for staff, guests, and each game.

  //draw the new updated screen
  drawScreen();
}

function drawScreen(){
  //update the screen
}

function test(){
  var testGuest = new Guest("Jill", 45, "Female", 1000, 7);
  var testDealer = new Staff("Bob", 30, "Male", "Dealer", 15);
  var testGame = new Game("Test Game 1", testDealer, "guestList", 5, 500);

  document.getElementById("test").innerText += testDealer.staffName+" | "+testGuest.guestName+" | "+testGame.gameName;
}

function Game(gameName, dealer, listOfGuests, minBet, maxBet){
  this.gameName = gameName;
  this.dealer = dealer;
  this.listOfGusts = listOfGuests;
  this.minBet = minBet;
  this.maxBet = maxBet;
}
//var testGame = new Game("Test Game 1", testDealer, <listOfGuests>, 5, 500);

function Guest(guestName, age, gender, money, luckyNumber){
  this.guestName = guestName;
  this.age = age;
  this.gender = gender;
  this.money = money;
  this.luckyNumber = luckyNumber;
}
//var testGuest = new Guest("Jill", 45, "Female", 1000, 7);

function Staff(staffName, age, gender, job, salary){
  this.staffName = staffName;
  this.age = age;
  this.gender = gender;
  this.job = job;
  this.salary = salary;
}
//var testDealer = new Staff("Bob", 30, "Male", "Dealer", 15);

function createNewStaff(staffName, age, gender, job, salary){

}

function createNewGuest(guestName, age, gender, money, luckyNumber){

}

function hireStaff(){
  document.getElementById('hireNewStaff').style.display='block';
}
