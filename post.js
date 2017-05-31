var data = ["John Smith- 10:31pm<br/>Havin a great time today:)",
			"Reid Flugbug- 1:30am<br/>Is compsci due tom???",
			"Josh VanBant- 4:20am<br/>Oh man.... I have to tell you about the time I made areally long post so that way Bailey could see what happens when you've got lotso\' text. Man that was crazy wasn\'t it??? LOL<br/>By the way Reid I think u screwed haha... goodluck<br/>Signing off,<br/>Josh",
			"Alex Notop- 3:12pm<br/>Wow",
			"Reid\'s Grillfriend- 4:11<br/>Reid do you want steak?",
			"AcrosticMaster783- 8:13pm<br/>Hellicopters<br/>Elevate<br/>Youniverses",
			"Timmy Nuwtron- 8:34pm<br/>Do you even know what it means to be a superhero??<br/><br/>Yeah thats what I thought. You're a looser."];

var posts = new Posts(data);
//posts.placePosts();

function Posts(posts){
	this.posts = posts;
	
	this.add = function(post){
		this.posts[this.posts.length] = post;
	}
	
	this.placePosts = function(){
		
		for(var index=0; index<data.length; index++){
			var div = document.createElement("div");
			div.id = "posts";
		
			var str = this.posts[index].split("<br/>");
			var newStr = "";
			for(var i=0; i<str.length; i++){
				newStr+= (i==0) ? "<h4>"+str[i]+"</h4>" : str[i]+"<br/>";
			}
		
			div.innerHTML = newStr;

			//document.getElementById("posts").appendChild(div);
			var temp=document.getElementById("posttemp");
			temp.insertBefore(div,temp.childNodes[0]);
		}
	}
	
	this.placePost = function(index){
		var div = document.createElement("div");
		div.id ="posts";
		
		var str = this.posts[index].split("<br/>");
		var newStr = "";
		var d = new Date();
		for(var i=0; i<str.length; i++){
			newStr+= (i==0) ? "<h4>"+str[i]+"- "+formatTime(d)+"</h4>" : str[i]+"<br/>";
		}
		
		div.innerHTML = newStr;

		//document.getElementById("posts").appendChild(div);
		var temp=document.getElementById("posttemp");
		temp.insertBefore(div,temp.childNodes[0]);
	}
	
	this.placeLast = function(){
		this.placePost(this.posts.length-1);
	}
}

function formatTime(date){
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = (hours>=12) ? 'pm' : 'am';
	hours = hours%12;
	hours = (hours) ? hours : 12;
	minutes = (minutes<10) ? '0'+minutes : minutes;
	var strTime = hours+":"+minutes+ampm;
	return strTime;
}