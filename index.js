let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
				9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46, 
				97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
				16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 16];

 /* document.onkeypress = function (event) {
//	console.log(event);
	keyboard.push(event.charCode);
	console.log(keyboard);
}  */
function init() {
	let out = "";
	for (let i = 0; i < keyboard.length; i++) {
		if (i === 14 || i === 29 || i === 41) {
			out += '<div class="clearfix"></div>';
		}
		switch (i) {
		case 13: 
			out += '<div class="k-key-gray" + style="width: 150px;"+ data="' + keyboard[i] + '" >' + 'Backspace' + '</div>';
			break;
		case 14: 
			out += '<div class="k-key-gray" + data="' + keyboard[i] + '" >' + 'Tab' + '</div>';
			break;
		case 46: 
			out += '<div class="k-key-gray"+ data="' + keyboard[i] + '" >' + 'DEL' + '</div>';
			break;
		case 96: out += '<div class="k-key-gray" + style="color: #ffffff;"+ data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
			break;	
		default: out += '<div class="k-key" + data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
			break;
			}
	}
	document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeypress = function (event) {
	console.log(event.code);
	console.log(event.keyCode);
	document.querySelectorAll('#keyboard .k-key').forEach(function (element){
		element.classList.remove('active');
	});
	document.querySelectorAll('#keyboard .k-key-gray').forEach(function (element){
		element.classList.remove('active');
	});
	if (event.keyCode === 13 || event.keyCode === 14 || event.keyCode === 46 || event.keyCode === 96) {
		document.querySelector('#keyboard .k-key-gray[data="'+event.keyCode+'"]').classList.add('active');
	} else 
	document.querySelector('#keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active');
}

document.querySelectorAll('#keyboard .k-key').forEach(function (element){
	element.onclick = function(event) {
		document.querySelectorAll('#keyboard .k-key').forEach(function (element){
			element.classList.remove('active');
		});
		document.querySelectorAll('#keyboard .k-key-gray').forEach(function (element){
			element.classList.remove('active');
		});		
		let code = this.getAttribute('data');
		this.classList.add('active');
		console.log(code);
	}
});

/* document.onkeypress = function (event) {
	console.log(event.code);
	console.log(event.keyCode);
	document.querySelectorAll('#keyboard .k-key-gray').forEach(function (element){
		element.classList.remove('active');
	});
	document.querySelectorAll('#keyboard .k-key').forEach(function (element){
		element.classList.remove('active');
	});	
	document.querySelector('#keyboard .k-key-gray[data="'+event.keyCode+'"]').classList.add('active');
} */

document.querySelectorAll('#keyboard .k-key-gray').forEach(function (element){
	element.onclick = function(event) {
		document.querySelectorAll('#keyboard .k-key-gray').forEach(function (element){
			element.classList.remove('active');
		});
		document.querySelectorAll('#keyboard .k-key').forEach(function (element){
			element.classList.remove('active');
		});		
		let code = this.getAttribute('data');
		this.classList.add('active');
		console.log(code);
	}
});