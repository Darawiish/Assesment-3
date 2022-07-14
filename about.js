console.log("hello world");

// img.mouseover = function(){"You're beautiful"};



function handleSubmit(evt) {
	evt.preventDefault()
	
	alert("form submit")
	;
}

function imgAlert() {

	alert("You're beautiful");

}



let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


let img = document.querySelector('#duck'); 
img.addEventListener('mouseover', imgAlert)

