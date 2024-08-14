function logIn(){
	let password = window.localStorage.getItem(document.getElementById("username").value);
	if (password == document.getElementById("password").value){
		window.location.replace("./createQues.html");
		window.sessionStorage.setItem("currentUser", document.getElementById("username").value);
	}
}
function register(){
	if ((document.getElementById("username").value) && (document.getElementById("password").value) && (document.getElementById("email").value))
	{
		window.localStorage.setItem(document.getElementById("username").value, document.getElementById("password").value);
		window.localStorage.setItem(document.getElementById("email").value, document.getElementById("password").value);
		window.location.replace("./Landing.html")
	}
	else{
		window.location.replace("./registration.html")
	}
}
function addQuestion(){
	if (!(document.getElementById("quizTitle").value)){
		window.alert("Title required");
	}
	else if (!(document.getElementById("question").value)){
		window.alert("Question required");
	}
	else if ((!(document.getElementById("option1").value)) || (!(document.getElementById("option2").value)) || (!(document.getElementById("option3").value)) || (!(document.getElementById("option4").value))){
		window.alert("All options required");
	}
	else{
		document.getElementById("quizTitle").disabled = true;
		var checked;
		if(document.getElementById("radio1").checked){
			checked = 1;
		}
		else if(document.getElementById("radio2").checked){
			checked = 2;
		}
		else if(document.getElementById("radio3").checked){
			checked = 3;
		}
		else{
			checked = 4;
		}
		window.sessionStorage.setItem(document.getElementById("question").value, [[document.getElementById("option1").value,document.getElementById("option2").value,document.getElementById("option3").value,document.getElementById("option4").value], checked])
		document.getElementById("question").value = "";
		document.getElementById("option1").value = "";
		document.getElementById("option2").value = "";
		document.getElementById("option3").value = "";
		document.getElementById("option4").value = "";
		document.getElementById("radio1").setAttribute("checked", "uchecked");
		document.getElementById("radio2").setAttribute("checked", "uchecked");
		document.getElementById("radio3").setAttribute("checked", "uchecked");
		document.getElementById("radio4").setAttribute("checked", "uchecked");
	}
}
function saveQuiz(){
	if (!(document.getElementById("quizTitle").value)){
		window.alert("Title required");
	}
	else if (!(document.getElementById("question").value)){
		window.alert("Question required");
	}
	else if ((!(document.getElementById("option1").value)) || (!(document.getElementById("option2").value)) || (!(document.getElementById("option3").value)) || (!(document.getElementById("option4").value))){
		window.alert("All options required");
	}
	else{
		var checked;
		if(document.getElementById("radio1").checked){
			checked = 1;
		}
		else if(document.getElementById("radio2").checked){
			checked = 2;
		}
		else if(document.getElementById("radio3").checked){
			checked = 3;
		}
		else{
			checked = 4;
		}
		window.sessionStorage.setItem(document.getElementById("question").value, [[document.getElementById("option1").value,document.getElementById("option2").value,document.getElementById("option3").value,document.getElementById("option4").value], checked])
		var temp = [];
		var quesObj = {};
		for (const values in window.sessionStorage){
			temp.push([values, window.sessionStorage[values]]);
		}
		for (var iter = 0; iter < window.sessionStorage.length; iter++){
			quesObj[temp[iter][0]] = temp[iter][1];
		}
		var finalObj = {};
		if (window.localStorage.getItem("Quiz")){
			var tempObj = JSON.parse(localStorage.getItem("Quiz"));
			tempObj[document.getElementById("quizTitle").value] = quesObj;
			finalObj = tempObj;
			console.log("aLinkcolor", finalObj);
		}
		else{
			finalObj[document.getElementById("quizTitle").value] = quesObj;
			console.log("assd", finalObj);
		}
		window.localStorage.setItem("Quiz", JSON.stringify(finalObj));
	}
}
function newSession(){
	window.sessionStorage.setItem("currentUser", "");
}