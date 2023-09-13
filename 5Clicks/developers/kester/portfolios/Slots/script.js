
const slots = [
	["ñ", "ö", "æ", "å", "ç"],
	["ñ", "ö", "æ", "å", "ç"],
	["ñ", "ö", "æ", "å", "ç"]
];


const winnings = {
	"ñññ": 2,
	"ööö": 5,
	"æææ": 12,
	"ååå": 30,
	"ççç": 100
};


const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const coinsDisplay = document.getElementById("coins");
const betInput = document.getElementById("bet");
const resultDisplay = document.getElementById("result");


let coins = 20;


function spin() {

	const bet = parseInt(betInput.value);


	if (bet > coins) {
		resultDisplay.textContent = "Not enough coins to place bet.";
		return;
	}

	coins -= bet;
	coinsDisplay.textContent = coins;

	const slot1Value = slots[0][Math.floor(Math.random() * slots[0].length)];
	const slot2Value = slots[1][Math.floor(Math.random() * slots[1].length)];
	const slot3Value = slots[2][Math.floor(Math.random() * slots[2].length)];

	slot1.textContent = slot1Value;
	slot2.textContent = slot2Value;
    slot3.textContent = slot3Value;


const combination = slot1Value + slot2Value + slot3Value;
if (combination in winnings) {
	coins += bet * winnings[combination];
	coinsDisplay.textContent = coins;
	resultDisplay.textContent = `You won ${bet * winnings[combination]} coins!`;
} else {
	resultDisplay.textContent = "Better luck next time!";
}


if (coins === 0) {
    const resultImage = document.getElementById("result-image");
    resultImage.src = "grabe ba.jpg";
    resultImage.style.display = "block";
    resultDisplay.textContent = "Olats nanaman! Grabe ba!"
    betInput.disabled = true;
    document.getElementById("spin-button").disabled = true;
  }}