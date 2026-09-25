//your JS code here. If required.
let timeDisply=document.getElementById("timer")
let newDate=new Date();
setInterval(
	function(){
		newDate=new Date();
		timeDisply.innerHtml=newDate.toLocalString();
	},1000
)