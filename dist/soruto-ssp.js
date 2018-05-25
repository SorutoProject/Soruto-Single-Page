/*
Soruto Single Page
This is a JavaScript Plugin for make your single page app(SPA).

License:MIT
Version 0.1b
Written by Soruto Project.

Notice:You have to use this library with soruto-ssp-*.css
*/

var single = new Object;
single.modal = new Object;
single.layer = new Object;
var bgevent  = null;//Background Event Var.
var maxindex = 0;
var maxindexElem;

//buttons Setting
var singleOkButtonValue = "OK"
var singleCancelButtonValue = "Cancel";
//modal
single.modal.alert = function(t,str,bclick,f){
	single.modal.close();
	var modal = document.createElement("div");
	modal.innerHTML = t + '<hr>' + str + '<br><input type="button" class="single-modal-button" id="single-ok-button">';
	var bg = document.createElement("div");
	single.modal.close();
	modal.id= "single-modal";
	bg.id = "single-modal-bg";
	if(bclick === true){
	bg.addEventListener('click', single.modal.close, false);
	}
	document.body.appendChild(modal);
	document.body.appendChild(bg);
	var okb = document.getElementById("single-ok-button");
	okb.focus();
	okb.value = singleOkButtonValue;
	if(f){
	okb.onclick = new Function("single.modal.closeRun('" + f + "')");
	document.getElementById("single-modal-bg").onclick = new Function("single.modal.closeRun('" + f + "')");
	}else{
	okb.onclick = new Function("single.modal.close()");
	}
}
single.modal.confirm = function(t,str,bclick,yf,nf){
	single.modal.close();
	var modal = document.createElement("div");
	modal.innerHTML = t + '<hr>' + str + '<br><input type="button" class="single-modal-button" id="single-ok-button"> <input type="button" class="single-modal-button" id="single-cancel-button">';
	var bg = document.createElement("div");
	single.modal.close();
	modal.id= "single-modal";
	bg.id = "single-modal-bg";
	if(bclick === true){
	bg.addEventListener('click', single.modal.close, false);
	}
	document.body.appendChild(modal);
	document.body.appendChild(bg);
	var okb = document.getElementById("single-ok-button");
	okb.focus();
	okb.value = singleOkButtonValue;
	if(yf){
	okb.onclick = new Function("single.modal.closeRun('" + yf + "')");
	}else{
	okb.onclick = new Function("single.modal.close()");
	}
	var cancelb = document.getElementById("single-cancel-button");
	cancelb.value = singleCancelButtonValue;
	if(nf){
	cancelb.onclick = new Function("single.modal.closeRun('" + nf + "')");	
	}else{
	cancelb.onclick = new Function("single.modal.close()");
	}
}
single.modal.close = function(){
	var modal = document.getElementById("single-modal");
	var bg = document.getElementById("single-modal-bg");
	if(modal){
	document.body.removeChild(modal); 
	}if(bg){
	document.body.removeChild(bg); 
	}
}
single.modal.closeRun = function(f){
	single.modal.close();
	eval(f);
}

//layer
single.layer.add = function(id,num,cls){
	var newlayer = document.createElement("div");
	newlayer.id = id;
	newlayer.style.zIndex = num;
	if(num > maxindex){
		maxindex = num;
		maxindexElem = id;
	}
	if(cls){
		newlayer.className = cls;
	}
	document.body.appendChild(newlayer);
}
single.layer.remove = function(id){
	var removelayer = document.getElementById(id);
	if(removelayer){
		document.body.removeChild(removelayer);
	}
}
single.layer.changeIndex = function(id,num){
	document.getElementById(id).style.zIndex = num;
}