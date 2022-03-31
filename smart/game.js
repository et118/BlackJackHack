var list;
var count;
var decks;
var MaxBet;
var money;
var sats;
var BetSize;
count = 0;
sats = 0;
function blanda() {

}
function NextRound(element) {
	element.onclick = function () {
		if (count <= 0) {
			sats = 1;
		} else {
			sats = Math.floor(count / decks * BetSize);
			if (sats < 1) {
				sats = 1;
			} else if (sats >= money) {
				sats = "Satsa Allt!!!";
			}
		}
		document.getElementById("bet_div").textContent = "Satsa : " + String(sats);

		element = document.createElement("br");
		document.getElementById("info").appendChild(element);

		element = document.createElement("button");
		element.id = "yes";
		element.textContent = "Ja";

		element.onclick = function () {
			element = document.getElementById("no")
			element.parentNode.removeChild(element)
			money += Math.floor(count / decks * BetSize)
			BetSize = money / 10;
			element = document.getElementById("yes")
			element.parentNode.removeChild(element);
		}


		document.getElementById("info").appendChild(element);

		element = document.createElement("button");
		element.id = "no";
		element.textContent = "Nej";
		element.onclick = function () {
			element = document.getElementById("yes")
			element.parentNode.removeChild(element)
			money -= Math.floor(count / decks * BetSize)
			BetSize = money / 10;
			element = document.getElementById("no")
			element.parentNode.removeChild(element);
			
		}
		document.getElementById("info").appendChild(element);
	}
}
function clicked(element, number) {
	element.onclick = function () {
		if (typeof (number) == "string" || number == 10) {
			count -= 1;
		} else {
			if (number <= 6 && number >= 2) {
				count += 1;
			}
		}
	}
		

}
function init() {
	document.getElementById("input").style.marginLeft = "650px";
	document.getElementById("info").textContent = "Vilket kort?";
	var element = document.createElement("button");
	element.id = "blanda";
	element.onclick = blanda();
	element.textContent = "Blanda"
	document.getElementById("input").appendChild(element);

	element = document.createElement("button");
	element.id = "NextRound";
	element.textContent = "N" + "\u00E4" + "sta Runda";
	NextRound(element);
	document.getElementById("input").appendChild(element);

	element = document.createElement("span");
	element.id = "bet";
	element.textContent = "Satsa : 1";
	document.getElementById("bet_div").appendChild(element);
	document.getElementById("bet_div").style.width = "150px";
	document.getElementById("bet_div").style.border = "4px solid black";
	


}






function start() {
	if (document.getElementById("pengar").value != "" && document.getElementById("kortlekar").value != "" && document.getElementById("maxbet").value != "") {
		money = document.getElementById("pengar").value;
		BetSize = money / 10;
		decks = document.getElementById("kortlekar").value;
		MaxBet = document.getElementById("maxbet").value;
		var start = document.getElementById("start");
		start.parentNode.removeChild(start);
		var bort = document.getElementById("first");
		bort.parentNode.removeChild(bort);
		list = document.getElementById("card_list");
		document.getElementById("info").textContent = "";
		list2 = [];
		var types = ["C", "D", "S", "H"];
		var saved_x;
		for (y = 0; y <= 3; y++) {

			for (x = 1; x <= 13; x++) {
				saved_x = x;
				if (x == 1) {
					x = "A";
				} else if (x == 11) {
					x = "J";

				} else if (x == 12) {
					x = "Q"

				} else if (x == 13) {
					x = "K"

				}
				var listplace = document.createElement("l1");
				list.append(listplace)
				var element = document.createElement("IMG");
				
					
				
				element.src = "../images/cards/" + String(x) + types[y] + ".jpg";
				element.id = String(x) + types[y];
				clicked(element, x)
				listplace.appendChild(element);
					
				
				x = saved_x;
				
			}
			var listplace = document.createElement("l1");
			list.append(listplace)
			listplace.appendChild(document.createElement("br"))
			listplace.appendChild(document.createElement("br"))
			
			
		}
		init()
	} else {
		document.getElementById("info").textContent = "Fyll i alla textf" + "\u00E4" + "lt"
	}
	
	
	
}
