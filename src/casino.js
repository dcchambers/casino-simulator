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
  var testPlayer = new Player("Jill", 45, "Female", 1000, 7);
  var testDealer = new Staff("Bob", 30, "Male", "Dealer", 15);
  var testGame = new Game("Test Game 1", testDealer, "playerList", 5, 500);

  document.getElementById("test").innerText += testDealer.staffName+" | "+testPlayer.playerName+" | "+testGame.gameName;
}

function Game(gameName, dealer, listOfPlayers, minBet, maxBet){
  this.gameName = gameName;
  this.dealer = dealer;
  this.listOfPlayers = listOfPlayers;
  this.minBet = minBet;
  this.maxBet = maxBet;
}
//var testGame = new Game("Test Game 1", testDealer, <listOfPlayers>, 5, 500);

function Player(playerName, age, gender, money, luckyNumber){
  this.playerName = playerName;
  this.age = age;
  this.gender = gender;
  this.money = money;
  this.luckyNumber = luckyNumber;
}
//var testPlayer = new Player("Jill", 45, "Female", 1000, 7);

function Staff(staffName, age, gender, job, salary){
  this.staffName = staffName;
  this.age = age;
  this.gender = gender;
  this.job = job;
  this.salary = salary;
}
//var testDealer = new Staff("Bob", 30, "Male", "Dealer", 15);
