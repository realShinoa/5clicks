var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var betInput = document.getElementById("bet");
var coinsSpan = document.getElementById("coins");
var resultPara = document.getElementById("result");

var symbols = ["🍈", "🍍", "🍌", "🍇", "🍊"]; 
var wins = {
    "🍈🍈🍈": 2,
    "🍍🍍🍍": 5,
    "🍌🍌🍌": 15,
    "🍇🍇🍇": 20,
    "🍊🍊🍊": 100
};

var coins = 20;
var bet = 1;

function spin() {
bet = parseInt(betInput.value); 
if (isNaN(bet) || bet <= 0) {
resultPara.textContent = "Invalid bet amount!";
return;
}
if (coins < bet) {
resultPara.textContent = "Not enough coins to bet!";
return;
}

coins -= bet;
coinsSpan.textContent = coins;
    var interval1 = setInterval(function() {
        slot1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    }, 100); 

    var interval2 = setInterval(function() {
        slot2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    }, 100); 

    var interval3 = setInterval(function() {
        slot3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    }, 100); 

    setTimeout(function() {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);

        var result = checkWin();
        if (result) {
            var multiplier = wins[result];
            var winAmount = bet * multiplier;
            coins += winAmount;
            coinsSpan.textContent = coins;
            resultPara.textContent = "You won x" + winAmount + " coins!";
        } else {
            resultPara.textContent = "Try again!";
        }
    }, 3000); 
}

function checkWin() {
    var symbolsString = slot1.textContent + slot2.textContent + slot3.textContent;
    return wins.hasOwnProperty(symbolsString) ? symbolsString : null;
}