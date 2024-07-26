function gameStart() {
	document.querySelector("#gora").classList.add("goraa");
}

function gamePause() {
	document.querySelector("#gora").classList.remove("goraa");
}

const pers = document.getElementById('pers');
const gora = document.getElementById('gora');

document.addEventListener('keydown', function(event){
	jump();
});

function jump() {
	if (pers.classList != 'jump') {
		pers.classList.add("jump")	
	}
	setTimeout(function() {
		pers.classList.remove("jump")	
	}, 300)
}

let isAlive = setInterval (function() {
	let persTop = parseInt(window.getComputedStyle(pers).getPropertyValue('top'))
	let goraLeft = parseInt(window.getComputedStyle(gora).getPropertyValue('left'))
	const gameIsOver = goraLeft < 50 && goraLeft > 0 && persTop >= 140

	if (gameIsOver) {
		gamePause()
	}
})