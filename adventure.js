var gamecontainer = document.getElementById('game-container')
var title = document.getElementById('title')
var description = document.getElementById('description')
var gamebuttons = document.getElementById('game-buttons')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var inventoryitem = document.getElementById('inventoryItem')
title.innerText = 'Vliegtuig Crash'
description.innerText = 'Uitleg: Je komt in dit spel in een vliegtuig crash terecht en jij moet zien te overleven door de juiste keuzens te maken.'
button2.style.display = 'none'
button3.style.display = 'none'
button1.innerText = 'Start'
button1.onclick = l1;
document.body.appendChild(button1);
var restart = document.createElement('button');
restart.innerHTML = 'Restart'
document.body.appendChild(restart);
restart.onclick = l1;
restart.style.display = 'none'

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
	alert('Het mes is niet gevonden je hebt geluk gehad!')
	inventoryitem.style.display = 'block'
	title.innerText = 'Level 2 Oortjes'
	document.body.style.backgroundImage = "url('img/level2.jpg')";
	description.innerText = 'je loopt naar je gate je vergeet je oortjes bij een restaurantje op het vliegveld maar je hebt haast om je vlugt te halen wat doe je?'
	button1.innerText = 'Ik ga terug'
	button2.style.display = 'block'
	button2.innerText = 'Ik ga zonder oortjes'
	button1.onclick = gameover;
	button2.onclick = l3k2;
}
function gameover(){
	title.innerText = 'Je hebt verloren'
	document.body.style.backgroundImage = "url('img/game-over.png')";
	description.innerText = ''
	restart.style.display = 'block'
	button1.style.display = 'none'
	button2.style.display = 'none'
	button3.style.display = 'none'
	inventoryItem.style.display = 'none'
}
function l3k2(){
	title.innerText = 'Level 3 Opstijgen'
	document.body.style.backgroundImage = "url('img/level3.jpg')";
	description.innerText = 'description'
}