// JavaScript Document


var donckos=1;
const cult="bestaan";
let members=1;

function addmembers(newmembers){
	members=members+newmembers;
	document.getElementById("join").textContent=members+ " memberships";
}

function addmembersmobile(newmembers){
	members=members+newmembers;
	document.getElementById("join-knop").textContent=members+ " memberships";
	
	 if (members==5){
		 window.confirm("STOP ADDING MEMBERS! DO SOMETING WITH YOUR LIFE FFS!!");
	} 
	for(var i=0; i<5; i++){
		 window.confirm("THIS IS UNACCEPTABLE!!!!!")
	}	 
 }
	
	

