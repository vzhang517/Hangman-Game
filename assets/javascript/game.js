var wordArray= ["redbull", "monster", "rockstar", "bawls", "nos", "venom", "amp"];

var randomWord= wordArray [Math.floor(Math.random() * wordArray.length)];


var s;
var count= 6;
var lives= 0;
var answerArray = [];


function reloadPage(){
   window.location.reload();
}

function underscores () {

	for (var i= 0; i< randomWord.length; i++){

		answerArray[i] = "_";
	}

	s= answerArray.join(" ");
	document.getElementById("answer").innerHTML = s;


}



document.onkeyup = function(event) {

		var userInput = String.fromCharCode(event.keyCode).toLowerCase();

		for (var i= 0; i< randomWord.length; i++){

			if (randomWord[i] === userInput){
				answerArray[i] = userInput;
				
			
			}
		}




	

		if(randomWord[i]!== userInput){
			var wrong = document.getElementById("wrong");
			var buchstabe = document.createTextNode(" " + userInput);
			wrong.appendChild(buchstabe); 
			lives++;
			count--;

		}

			document.getElementById("counter").innerHTML = "Number of Guesses left: " + count;
			document.getElementById("answer").innerHTML= answerArray.join(" ");
	

	var win = true;
	for (var i = 0; i < answerArray.length; i++){
		if(answerArray[i] === "_ "){
			win = false;
		}
	}
	if(win = true){
		window.alert("You win!");
	}
	

	if(lives === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

	



