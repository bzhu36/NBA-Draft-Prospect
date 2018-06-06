function loadpic(name){
	var elem = document.createElement("img");

	elem.setAttribute("src", "images/"+name+".jpg");
	elem.setAttribute("alt", name);
	document.getElement.ById(name).appendChild(elem);
}