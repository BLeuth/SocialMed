var profile;

function verify(user,pass){
	if(user=="Joe"&&pass=="password"){
		alert("It Worked!!!! You're Logged In");
		profile = new loadProfile(user);
		document.getElementById('login').style.display='none';
		//document.getElementById('profiledrop').innerHTML = user;
	} else {
		alert("Didnt work");
	}
}

function loadProfile(user){
	this.name = user;
}