var i;
var j;
var turn = "x";
var xs = [];
var os = [];
var win = 0;
var info = document.getElementById("info");

//var Game = require("../models/game");

function setup() {
  var parent = document.getElementById("board");
  info.innerHTML = "X starts!";
  for (i = 1; i < 6; i++) {
    for (j = 1; j < 6; j++) {
      var btn = document.createElement("td");
      btn.classList.add("box");
      btn.id = parseInt(i.toString() + j.toString());
      btn.addEventListener("click", draw);
      parent.appendChild(btn);
    }
  }
}

function draw() {
  if (this.innerHTML !== "") {
    alert("SOS");
  } else {
    if (turn === "x") {
      this.innerHTML = "X";
      xs.push(this.id);
      turn = "o";
      info.innerHTML = "O's turn!";
      checkWinner(this.id, xs, "1", "X");
    } else {
      this.innerHTML = "O";
      os.push(this.id);
      turn = "x";
      info.innerHTML = "X's turn!";
      checkWinner(this.id, os, "2", "O");
    }
  }
  //console.log(xs + " " + os);
}

function checkWinner(guess, list, player, playerl) {
  var checker = 0;
  //check column
  for (i = -40; i < 41; i += 10) {
    if (list.includes((parseInt(guess) + i).toString())) {
      checker++;
    }
    if (checker === 5) {
      alert("Player " + player + " won!");
      info.innerHTML = playerl + " won!";
      win = 1;
      window.addEventListener(
        "click",
        function(event) {
          event.stopPropagation();
        },
        true
      );
      break;
    }
  }
  checker = 0;

  //check row
  for (i = -4; i < 5; i++) {
    if (list.includes((parseInt(guess) + i).toString())) {
      checker++;
    }
    if (checker === 5) {
      alert("Player " + player + " won!");
      info.innerHTML = playerl + " won!";
      win = 1;
      window.addEventListener(
        "click",
        function(event) {
          event.stopPropagation();
        },
        true
      );
      break;
    }
  }
  checker = 0;

  //check diagonal1
  for (i = -44; i < 45; i += 11) {
    if (list.includes((parseInt(guess) + i).toString())) {
      checker++;
    }
    if (checker === 5) {
      alert("Player " + player + " won!");
      info.innerHTML = playerl + " won!";
      win = 1;
      window.addEventListener(
        "click",
        function(event) {
          event.stopPropagation();
        },
        true
      );
      break;
    }
  }
  checker = 0;

  //check diagonal2
  for (i = -36; i < 37; i += 9) {
    if (list.includes((parseInt(guess) + i).toString())) {
      checker++;
    }
    if (checker === 5) {
      alert("Player " + player + " won!");
      info.innerHTML = playerl + " won!";
      win = 1;
      window.addEventListener(
        "click",
        function(event) {
          event.stopPropagation();
        },
        true
      );
      break;
    }
  }
  checker = 0;

  // If no one wins
  if (xs.length === 13 && win === 0) {
    info.innerHTML = "It's a Draw";
    alert("It's a draw!");
    window.addEventListener(
      "click",
      function(event) {
        event.stopPropagation();
      },
      true
    );
  }
}
setup();
