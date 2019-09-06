var btns = document.querySelectorAll(".buttons button");
var doggo= document.getElementsByClassName("dog")[0];

for (i=0;i< btns.length ; i++){
	btns[i].addEventListener("click", managerDoggoClasses);

}

function managerDoggoClasses(){
	if (this.getAttribute("data-add")){
		doggo.classList.add(this.getAttribute("data-add"));
	}
	if (this.getAttribute("data-remove")){
		doggo.classList.remove(this.getAttribute("data-remove"))
		name=prompt("Enter your name")
		$("h3").text("Hey ")
		$("h3").append(name)
		$("h3").append(", my name is Fox")
	}

}