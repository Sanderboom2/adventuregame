var gamecontainer = document.getElementById('game-container')
var title = document.getElementById('title')
var description = document.getElementById('description')
var gamebuttons = document.getElementById('game-buttons')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var inventoryitem = document.getElementById('inventoryItem')
title.innerText = 'Vliegtuig Chaos'
description.innerText = 'Uitleg: Je gaat met het vliegtuig op reis en jij moet deze reis zien te overleven door bepaalde keuzes te maken succes!'
button2.style.display = 'none'
button3.style.display = 'none'
button1.innerText = 'Start'
button1.onclick = l1;
document.body.appendChild(button1);

function l1(){
	title.innerText = 'Level 1 De Douane:'
	document.body.style.backgroundImage = "url('img/level1.jpg')";
	description.innerText = 'Je bent op het vliegveld en je moet nu door de douane je hebt nog een klein zakmes bij je. Besluit je deze achter te laten en in de prullenbak te gooien of neem je hem toch maar mee? Klik op verder om hem weg te gooien en klik op het mes in je inventory om hem mee te nemen.'
	button1.innerText = 'Verder'
	inventoryitem.src = 'img/mes.png'
	inventoryitem.style.height = '200px' 
	inventoryitem.style.display = 'block'
	inventoryitem.style.position = 'absolute'
	inventoryitem.style.top = '550px'
	button1.onclick = l2k1;
	inventoryitem.onclick = l2k2;
}
function l2k1(){
	inventoryitem.style.display = 'none'
	title.innerText = 'Level 2 Oortjes'
	document.body.style.backgroundImage = "url('img/level2.jpg')";
	description.innerText = 'je loopt naar je gate je vergeet je oortjes bij een restaurantje op het vliegveld maar je hebt haast om je vlugt te halen wat doe je?'
	button1.innerText = 'Ik ga terug'
	button2.style.display = 'block'
	button2.innerText = 'Ik ga zonder oortjes'
	button1.onclick = l3k1;
	button2.onclick = l3k2;
}
function l2k2(){
	inventoryitem.onclick = ''
	alert('Het mes is niet gevonden je hebt geluk gehad!')
	inventoryitem.style.display = 'block'
	title.innerText = 'Level 2 Oortjes'
	document.body.style.backgroundImage = "url('img/level2.jpg')";
	description.innerText = 'je loopt naar je gate je vergeet je oortjes bij een restaurantje op het vliegveld maar je hebt haast om je vlugt te halen wat doe je?'
	button1.innerText = 'Ik ga terug'
	button2.style.display = 'block'
	button2.innerText = 'Ik ga zonder oortjes'
	button1.onclick = l3k1;
	button2.onclick = l3k2;
}
function l3k1(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Je had haast had nou gewoon je oortjes laten liggen... Refresh de pagina om opnieuw te starten.'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
function l3k2(){
	title.innerText = 'Level 3 Opstijgen'
	document.body.style.backgroundImage = "url('img/level3.jpg')";
	description.innerText = 'Het vliegtuig gaat opstijgen en het lampje van je gordel gaat branden wat doe je?'
	button1.innerText = 'Ik doe mijn gordel om'
	button2.innerText = 'Ik doe mijn gordel niet om is toch onnodig.'
	button1.onclick = l4k1;
	button2.onclick = l4k2;
}
function l4k1(){
	title.innerText = 'Level 4 Turbulentie'
	document.body.style.backgroundImage = "url('img/level4.jpg')";
	description.innerText = 'Er is veel turbulentie en er wordt omgeroepen dat iederijn zijn handbagage in het kastje boven zich moet zetten wat doe je?'
	button1.innerText = 'Ik laat mijn handbagage bij mijn benen staan.'
	button2.innerText = 'Ik luister en zet het boven mijn hoofd.'
	button1.onclick = l5k1;
	button2.onclick = l5k2;
}
function l4k2(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Door turbulentie viel je van je stoel af en brak je nek. Refresh de pagina om opnieuw te starten'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
function l5k1(){
	title.innerText = 'Level 5 Ruzie'
	document.body.style.backgroundImage = "url('img/level5.jpg')";
	description.innerText = 'Je hoort achter je mensen ruzie maken het wordt een gevecht wat doe je?'
	button1.innerText = 'Ik blijf lekker zitten.'
	button2.innerText = 'Ik haal ze uit elkaar.'
	button1.onclick = l6k1;
	button2.onclick = l6k2;
}
function l5k2(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Het kastje schoot open en je bagage viel op je hooft je bent nu bewusteloos. Refresh de pagina om opnieuw te starten'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
function l6k1(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Niemand durft wat te doen en er wordt iemand in elkaar geslagen het vliegtuig moet nu een noodlanding maken. Refresh de pagina om opnieuw te starten'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
function l6k2(){
	title.innerText = 'Level 6 Ruzie deel 2'
	document.body.style.backgroundImage = "url('img/level6.jpg')";
	description.innerText = 'Je probeert het gevecht te stoppen en je wordt ook geslagen wat doe je?'
	button1.innerText = 'Je blijft rustig en haalt er meer mensen bij'
	button2.innerText = 'Je wordt boos en je geeft ze allebij een highkick'
	button1.onclick = l7k1;
	button2.onclick = l7k2;
}
function l7k1(){
	title.innerText = 'Level 7 Problemen'
	document.body.style.backgroundImage = "url('img/level7.jpg')";
	description.innerText = 'Er is een probleem met de motor van het vliegtuig het vliegtuig stort neer boven zee en iedereen springt er uit zodra we dicht bij het water komen maar je gordel zit vast en is niet los te krijgen wat doe je? klik op je zakmes om hem los te snijden!'
	button1.innerText = 'Ik probeer hem los te trekken'
	button2.style.display = 'none'
	button1.onclick = l8k2;
	inventoryItem.onclick = l8k1;
}
function l7k2(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Je wordt aangeklaagt voor mishandeling... Refresh de pagina om opnieuw te starten'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
function l8k1(){
	inventoryitem.style.display = 'none'
	title.innerText = 'Level 8 Zwemvest'
	document.body.style.backgroundImage = "url('img/level8.jpg')";
	description.innerText = 'Mensen beginnen uit het vliegtuig te springen uit haast vergeet jij je zwemvest ga je nog snel terug of niet?'
	button1.innerText = 'Ik ga terug'
	button2.innerText = 'ik spring zonder vest'
	button2.style.display = 'block'
	button1.onclick = l9k2;
	button2.onclick = l9k1;
}
function l8k2(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Hij zit te strak het lukt niet zonder mes je verdrinkt! Refresh de pagina om opnieuw te starten'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
function l9k1(){
	inventoryitem.style.display = 'none'
	title.innerText = 'Level 9 De zee'
	document.body.style.backgroundImage = "url('img/level9.jpg')";
	description.innerText = ''
	button1.innerText = ''
	button2.innerText = ''
	button1.onclick = l9k2;
	button2.onclick = l9k1;
}
function l9k2(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = 'Je hebt te weinig tijd het vliegtuig stort neer met jou er in! Refresh de pagina om opnieuw te starten'
	button1.style.display = 'none'
	button2.style.display = 'none'
}
