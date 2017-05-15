function getContent(fileName) {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", fileName + ".html", true);
	xmlhttp.send();

	document.body.focus();
}

window.onload = function() {
	var hashtag = window.location.hash;
	if (hashtag != "") {
		hashtag = hashtag.substring(1);
	} else {
		hashtag = "main";
	}
	getContent(hashtag);
}

function jumpToContent() {
	var contentElement = document.getElementById("content");
	contentElement.scrollIntoView();
	contentElement.focus();
}




function searchBadExampleFunction(){
	document.getElementById("showTextBadExample").innerHTML = "0 vastet leitud.";

}

function searchGoodExampleFunction(){
	var suggestions='<br><ul><li>' +"Kontrollige, et otsitava sõna on õigesti kirjutatud."+'</li><li>'+"Veenduge, et otsitava sõna alguses, lõpus ega keskel ei sisalduks ebasobivaid sümboleid (näiteks punkt, tühik, küsimärk jne)."+'</li></ul>';
	document.getElementById("showTextGoodExample").innerHTML = "Vasteid ei leitud." + suggestions;
}

function sendBadExample(){
	document.getElementById("error").innerHTML = "";
	document.getElementById("success").innerHTML = "";
	if (document.getElementById("name").value == "" || document.getElementById("email").value == ""){
		document.getElementById("error").innerHTML="Kohustuslikud väljad pole täidetud!";	
	} else {
		document.getElementById("success").innerHTML = "Teie andmed on edukalt saadetud!";
	}
	return false;
}

function sendBadExample2(){
	var isValid = true;
	document.getElementById("errorRequiredField").innerHTML = "";
	document.getElementById("errorValidation").innerHTML = "";
	document.getElementById("successNote").innerHTML = "";

	var name = document.forms["personalInformationForm"]["name"].value;
	var email = document.forms["personalInformationForm"]["email"].value;
	if (name == "" || email == ""){
		document.getElementById("errorRequiredField").innerHTML = "Kohustuslikud väljad pole täidetud!";
		isValid = false;
	}
	
	var isFalse = validateEmail(email);
	if(validateName(name) == false || isFalse == false){
		document.getElementById("errorValidation").innerHTML = "Kontrollige sisendeid, sisaldavad ebasobivaid sümboleid!";
		isValid = false;	
	}

	if (isValid) {
		document.getElementById("successNote").innerHTML = "Teie andmed on edukalt saadetud!";
	}
	return false;
}

function validateEmail(email) {
	var bool = true;
	var x = email;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
		bool = false;
	}
	return bool;
}

function validateName(name) {
	var isValid = false;
	if (/[a-zA-Z -]/.test(name)) {
		isValid = true;
	}
	return isValid;
}

function sendGoodExample(){
	var isValid = true;
	document.getElementById("EmptyFieldErrorName").innerHTML = "";
	document.getElementById("EmptyFieldErrorEmail").innerHTML = "";
	document.getElementById("validationErrorEmail").innerHTML = "";
	document.getElementById("successNoteExample").innerHTML = "";

	var name = document.forms["informationForm"]["name"].value;
	if (name == ""){
		document.getElementById("EmptyFieldErrorName").innerHTML = "Eesnime sisestamine on kohustuslik";
		isValid = false;	
	} else if (validateName(name) == false) {
		document.getElementById("EmptyFieldErrorName").innerHTML = "Eesnimi on vigane, veenduge, et eesnimi sisaldaks tähti, tühikut  ja/või sidekriipsu.";
	}

	var email = document.forms["informationForm"]["email"].value;
	if (email == ""){
		document.getElementById("EmptyFieldErrorEmail").innerHTML = "Meiliaadressi sisestamine on kohustuslik";
		isValid = false;	
	}
	
	var isFalse = validateEmail(email);
	if(isFalse == false){
		document.getElementById("validationErrorEmail").innerHTML = "Meiliaadress on vigane, veenduge, et aadressis sisalduksid vajalikud sümbolid (näiteks: @, punkt)";
		isValid = false;
	}

	if (isValid) {
		document.getElementById("successNoteExample").innerHTML = "Teie andmed on edukalt saadetud!";
	}
	return false;
}