var mail = ["Silly String<br/>Bailey Leeth<br/>Hey Jim, I was wondering if you knew when the silly string shipment was coming in, let me know.<br/>-Bailey Leeth",
			"Superman Movie<br/>Stan Hastings<br/>Want to go to the new superman movie tonight?? HMU",
			"Conference<br/>Greg Sanches<br/>We have a district wide meeting tomorrow morning at 10, be there or be square..."];

var mails = new Mail(mail);


function Mail(mail){
	this.mail = mail;

	this.add = function(mail){
		this.mail[this.mail.length] = mail;
	}

	this.placeInbox = function() {
		for(var i=0; i<mail.length; i++){
			var div = document.createElement("div");
			div.id = "mails";
			//div.onclick = function() {mails.placeRead(div.info);};
			div.onclick = (function() {
					var currI = i;
					return function() { placeRead(currI); }
				})();
			
			var str = this.mail[i].split("<br/>");
			var newStr = "";
			newStr = str[0]+"<br/>"+str[1];

			div.innerHTML = newStr;

			var temp=document.getElementById("mailtemp");
			temp.insertBefore(div,temp.childNodes[0]);
		}
	}

	this.placeLatestInbox = function() {
		var div = document.createElement("div");
		div.id = "mails";
		div.onclick = (function() {
				var currI = mail.length-1;
				return function() { placeRead(currI); }
			})();
		var str = this.mail[this.mail.length-1].split("<br/>");
		var newStr = "";
		newStr = str[0]+"<br/>"+str[1];

		div.innerHTML = newStr;

		var temp=document.getElementById("mailtemp");
		temp.insertBefore(div,temp.childNodes[0]);
	}

	/*this.placeRead = function(index){
		//var div = document.createElement("div");
		var div = document.getElementById("readmailplace");

		var str = this.mail[index];

		div.innerHTML = str;
		alert(index);
	}*/
}

function placeRead(index) {
	//var div = document.createElement("div");
	document.getElementById("composemailplace").style.display = "none";
	document.getElementById("sendnoteplace").style.display = "none";
	var div = document.getElementById("readmailplace");
	var temp = mails.mail[index].split("<br/>");
	var str = "";
	str+= "<strong>Subject:</strong> "+temp[0]+"<br/>";
	str+= "<strong>From:</strong> "+temp[1]+"<br/><br/>";
	str+= temp[2];
	div.style.display = "block";
	div.innerHTML = str;
}

function composeMail(){
	document.getElementById("readmailplace").style.display = "none";
	document.getElementById("sendnoteplace").style.display = "none";
	var div = document.getElementById("composemailplace");
	div.style.display = "block";
}

function sendMail() {
	var to = document.getElementById('sendto').value;
	var message = document.getElementById('mailValue').value;
	var subj = document.getElementById('subject').value;
	if(to=="Joe"){
		mails.add(subj+"<br/>Joe<br/>"+message);
		mails.placeLatestInbox();
	}
	document.getElementById("composemailplace").style.display = "none";
	var div = document.getElementById("sendnoteplace");
	div.style.display = "block";
	if(to!=""){
		div.innerHTML = "The message was sent successfully";
	} else {
		div.innerHTML = "The message did not have a recipient";
	}
}

function clearMailTexts() {
	document.getElementById("sendto").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("mailValue").value = "";
}