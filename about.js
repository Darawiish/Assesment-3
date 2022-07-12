console.log("hello world");

img.onmouseover = function(){"You're beautiful"};



function handleSubmit(evt) {
	evt.preventDefault()
	
	alert("form submit")
	;
}



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

element.addEventListener(type,eventListener);