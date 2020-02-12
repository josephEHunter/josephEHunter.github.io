
let adventurer;

function Adventurer (classType, hp, mp, str, dex, int, xp) {
this.classType= classType;
this.hp= hp;
this.mp= mp;
this.str= str;
this.dex=dex;
this.int=int;
this.atk= (str+dex+int)
this.xp=xp;
};




let enemy;

function Enemy (name, hp, mp, atk, xp) {
this.name= name;
this.hp= hp;
this.mp= mp;
this.atk= atk;
this.xp=xp;
};


let slime= new Enemy("Slime", 150, 20, 20, 10);

// let goblin= new Enemy("Goblin", 80, 10, 18, 20);

// let wyvern= new Enemy("Wyvern", 120, 50, 22, 35);

// switch (enemy) {
//   case 0:
//     enemy=slime;
//     break;

//   case 1:
//     enemy=goblin;
//     break;

//   case 2:
//     enemy=wyvern;
//     break;
// }

// currentEnemy=[slime, goblin, wyvern]


// let bossEnemy;

// function BossEnemy (name, value, value, value, value) {
// this.name= name;
// this.hp= (Math.floor(Math.random() *2)+4);
// this.mp= Math.random();
// this.atk= (Math.floor(Math.random() *10)+5);
// this.xp=value;
// };

// let dragon= new BossEnemy("Dragon");
// let warewolf= new BossEnemy("Warewolf");
// let perscholas= new BossEnemy("Perscholas");

// let currBoss = [dragon, warewolf, perscholas];

// my attack function






let gameManager={
  
  setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType){
    switch (classType) {
      case "Warrior":
        adventurer = new Adventurer("Warrior", 250, 100, 45, 5, 0, 0);
        break;

      case "Thief":
          adventurer = new Adventurer("Thief", 250, 100, 10, 45, 0, 0);
          break;

      case "Mage":
            adventurer = new Adventurer("Mage", 250, 200, 0, 5, 60, 0);
            break;
    }

    let getInterface = document.getElementById('interface').innerHTML=
    '<div>' +
    '<h3>'  + classType + '</h3>' +
    '<p id="playerHp"> HP:  ' + adventurer.hp + ' </p>' +
    // '<p> MP:  ' + adventurer.mp + '</p>' +
    '<p> STR: ' + adventurer.str + '</p>' +
    '<p> DEX: ' + adventurer.dex + '</p>' +
    '<p> INT: ' + adventurer.int + '</p>' +
    '<p> XP:  ' + adventurer.xp + '</p>' +
    '</div>';

  },
//   display maze after char selection
  setPreFight: function(){

    let getCanvas = document.getElementById('game').style.display="block";
                    document.getElementById('preGame').style.display="none";
  }
}
let gameOver = () =>{
if (adventurer.hp<=0){

  document.getElementById('game').style.display='none';
  document.getElementById('battleScreen').style.display="none"
  document.getElementById('interface').innerHTML='<h1 class="gameOver">GameOver</h1>'
}
}


// player atk function

let myAtk = () => {


if (slime.hp >= 1 && adventurer.hp > 0){

   slime.hp -= adventurer.atk

   document.getElementById('enemyHp')
   enemyHp.innerText =`Hp: ${slime.hp}`;

   if (slime.hp >= 100){
   enemyHp.style.color="green"
 }
    if (slime.hp <=99 ){
    enemyHp.style.color="red"
    }
   if(slime.hp< 0)
   {
   return slime.hp = 0;
   }
 }
}


// enemy attack function

      let enAtk = () => {

        if (adventurer.hp>=1 && slime.hp>0){

              adventurer.hp -= slime.atk
              document.getElementById('playerHp').innerText =`HP: ${adventurer.hp}`;
              let playerHp=document.getElementById('playerHp');

              if (adventurer.hp>=160){
              playerHp.style.color="green";
            }
              if (adventurer.hp<=159 && adventurer.hp>80){
              playerHp.style.color="orange";
            }
              if (adventurer.hp<80){
              playerHp.style.color="red";
            }


            }
          }








// initializes on attack button press



let atkFun = () => {
  let atkBtn= document.getElementById('atkBtn')


myAtk();
enAtk();
gameOver();
  };

// battleFunctions
let returnFunc = () => {
  goBack = document.getElementById('returnBtn')
  if (slime.hp<=0){

  document.getElementById('game').style.display='block';
  document.getElementById('battleScreen').style.display="none"
  document.getElementById('stats').style.display="none"

  return slime.hp=150;
}
}


// game map key:
// 0 = wall
// 1 = path
// 2 = fights
// 3 = boss

let ctx = null;
let gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0,
	0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 0,
	0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 0, 1, 1, 2, 2, 2, 2, 2, 0,
	0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
	0, 2, 0, 1, 0, 2, 2, 2, 0, 1, 1, 2, 0, 2, 0, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 1, 2, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0,
	0, 1, 0, 1, 1, 2, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0,
	0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 2, 1, 0,
	0, 1, 0, 0, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0,
	0, 1, 2, 2, 2, 2, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
	0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2,
	0, 1, 2, 1, 0, 2, 1, 2, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
	0, 1, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 1, 2, 1, 0,
	0, 2, 2, 1, 0, 1, 1, 2, 2, 2, 2, 2, 0, 1, 0, 0, 0, 0, 1, 0,
	0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 2, 0, 1, 0, 0, 1, 0,
	0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
// height and width of boxes
let boxW = 40, boxH = 40;

// height and width of the map itself
let mapW = 20, mapH = 20;

//rendering and movement speed
//declared to be used later
let currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

// types of boxes or tiles in this game
let floorTypes = {
	solid	: 0,
	path	: 1,
  fight : 2,
  win: 3

};



// to find toIndex
//       (y * mapW) + x)
// don't forget >0<
//0 is still first in array coords


// the function to be passed into boxEvents when activated


function battleBox(){

// can do or statements to add more cords
 if (gameMap[toIndex(8,3)]==gameMap[toIndex(8,3)] ||
gameMap[toIndex()]==gameMap[toIndex(5,1)] ||
gameMap[toIndex()]==gameMap[toIndex(1,8)] ||
gameMap[toIndex()]==gameMap[toIndex(12,7)] ||
gameMap[toIndex()]==gameMap[toIndex(8,18)])
 {
   let enemy= new Enemy("Slime", 100, 20 ,20 ,20)




    // what display changes are made when a fight event occurs
    document.getElementById('stats').style.display="block"
    let slimeImg= document.getElementById('slimeImg');
    slimeImg.src="images/slime.png";
    document.getElementById('enemyName').innerText =` ${slime.name}`;
    document.getElementById('enemyHp').innerText =(`Hp: ${slime.hp}`);
    document.getElementById('enemyAtk').innerText =`ATK: ${slime.atk}`;
    document.getElementById('enemyXp').innerText =`xp: ${slime.xp}`;
    document.getElementById('game').style.display='none';
    document.getElementById('battleScreen').style.display="inline"
    document.getElementById('battleScreen').innerHTML="<h1>BATTLE</h2>" +
    `<button id="atkBtn" onclick="atkFun()">attack</button>` +
    `<button id="returnBtn" onclick="returnFunc()">return</button>`

}
};

function winBox(){
if (gameMap[toIndex(11,18)]===gameMap[toIndex(11,18)]){

 document.getElementById('game').style.display='none';
 document.getElementById('battleScreen').style.display="none"
 document.getElementById('interface').innerHTML='<h1 class="gameOver">You Have Won...</h1>'
 }
};

// event boxes below have an undefined function until stepped on
// so they wont process on start up like a place holder
// the keys of this object are tiles
//   to find toIndex
//      (y * mapW) + x)

let boxEvents = {
  101:enemy,
  101:function(){},
  163:enemy,
  163:function(){},
  28:enemy,
  28:function(){},
  247:enemy,
  247:function(){},
  178:enemy,
  178:function(){},

}

let winEvents = {
  239:function(){},
  238:function(){},
}
// change color and behavior of the boxes
// solid or path is all I currently have

let boxTypes = {
	0 : { colour:"black", floor:floorTypes.solid	},
	1 : { colour:"#5aa457", floor:floorTypes.path	},
	2 : { colour:"#5aa457", floor:floorTypes.path	},
	3 : { colour:"#286625", floor:floorTypes.path	}
};

// controls for the game
// up
// down
// left
// right

let keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

// an attemp to make the screen stop moving
// added viewport pretty much makes the game move
// around the player and makes the player position static


let viewport = {
	screen		: [0,0],
	startbox	: [0,0],
	endbox		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		let box = [ Math.floor(px/boxW), Math.floor(py/boxH) ];

		this.startbox[0] = box[0] - 1 - Math.ceil((this.screen[0]/2) / boxW);
		this.startbox[1] = box[1] - 1 - Math.ceil((this.screen[1]/2) / boxH);

		if(this.startbox[0] < 0) { this.startbox[0] = 0; }
		if(this.startbox[1] < 0) { this.startbox[1] = 0; }

		this.endbox[0] = box[0] + 1 + Math.ceil((this.screen[0]/2) / boxW);
		this.endbox[1] = box[1] + 1 + Math.ceil((this.screen[1]/2) / boxH);

		if(this.endbox[0] >= mapW) { this.endbox[0] = mapW-1; }
		if(this.endbox[1] >= mapH) { this.endbox[1] = mapH-1; }
	}
};


// in this case our player/Character
// is the square:
// where it wants to move
// when it moves
// size height and width
// position in the box
// position on the grid(centered)
// movement speed

let player = new Character();

function Character()
{
	this.boxFrom	= [1,1];
	this.boxTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [30,30];
	this.position	= [45,45];
	this.delayMove	= 200;
}
// position inside of square

Character.prototype.placeAt = function(x, y)
{
	this.boxFrom	= [x,y];
	this.boxTo		= [x,y];
	this.position	= [((boxW*x)+((boxW-this.dimensions[0])/2)),
		((boxH*y)+((boxH-this.dimensions[1])/2))];
};

// when it moves

Character.prototype.processMovement = function(t)
{
	if(this.boxFrom[0]==this.boxTo[0] && this.boxFrom[1]==this.boxTo[1]) { return false; }

	if((t-this.timeMoved)>=this.delayMove)
	{
		this.placeAt(this.boxTo[0], this.boxTo[1]);

  if(typeof boxEvents[toIndex(this.boxTo[0], this.boxTo[1])]!='undefined'||
  typeof boxEvents[toIndex(this.boxFrom[0], this.boxFrom[1])]!='undefined')

    {
      battleBox();

    }
    if(typeof winEvents[toIndex(this.boxTo[0], this.boxTo[1])]!='undefined'||
    typeof winEvents[toIndex(this.boxFrom[0], this.boxFrom[1])]!='undefined')

      {
        winBox();

      }

  }
  else
	{
		this.position[0] = (this.boxFrom[0] * boxW) + ((boxW-this.dimensions[0])/2);
		this.position[1] = (this.boxFrom[1] * boxH) + ((boxH-this.dimensions[1])/2);

		if(this.boxTo[0] != this.boxFrom[0])
		{
			let diff = (boxW / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.boxTo[0]<this.boxFrom[0] ? 0 - diff : diff);
		}
		if(this.boxTo[1] != this.boxFrom[1])
		{
			let diff = (boxH / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.boxTo[1]<this.boxFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}

	return true;
}

// where it wants to move
//checks to see if it can
// if yes this control key moves 1 space in this instance
Character.prototype.canMoveTo = function(x, y)
{
	if(x < 0 || x >= mapW || y < 0 || y >= mapH || battleScreen==true) { return false; }
	if( boxTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.path && boxTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.enemy && boxTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.boss) { return false; }
	return true;
};
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.boxFrom[0], this.boxFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.boxFrom[0], this.boxFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.boxFrom[0]-1, this.boxFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.boxFrom[0]+1, this.boxFrom[1]); };

Character.prototype.moveLeft	= function(t) { this.boxTo[0]-=1; this.timeMoved = t; };
Character.prototype.moveRight	= function(t) { this.boxTo[0]+=1; this.timeMoved = t; };
Character.prototype.moveUp		= function(t) { this.boxTo[1]-=1; this.timeMoved = t; };
Character.prototype.moveDown	= function(t) { this.boxTo[1]+=1; this.timeMoved = t; };


// coordinates function

function toIndex(x, y)
{
	return((y * mapW) + x);
}



// what i want to happen when the page loads up
// what do i want to show what do i want hidden
// what functions if any and so on

window.onload = function()
{
  document.getElementById("game").style.display = "none";




	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
	});

	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];
};


// in this function is where viewport plays inspect in
// it draws the area within a radius saving power
// seeing the only the part of the map that you are on
// instead of the whole map or having ofscreen areas

function drawGame()
{
	if(ctx==null) { return; }

	let currentFrameTime = Date.now();
	let timeElapsed = currentFrameTime - lastFrameTime;

	let sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	if(!player.processMovement(currentFrameTime))
	{
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(currentFrameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(currentFrameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(currentFrameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(currentFrameTime); }
	}

	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(let y = viewport.startbox[1]; y <= viewport.endbox[1]; ++y)
	{
		for(let x = viewport.startbox[0]; x <= viewport.endbox[0]; ++x)
		{
			ctx.fillStyle = (boxTypes[gameMap[toIndex(x,y)]].colour)

			ctx.fillRect( viewport.offset[0] + (x*boxW), viewport.offset[1] + (y*boxH),
				boxW, boxH);
		}
	}

  // player box fill rectangle
  // color

	ctx.fillStyle = "red";
	ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

	ctx.fillStyle = "#fff000";


	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}

let stats = () => {

      document.getElementById('enemyName').innerText =` ${slime.name}`;

      let enemyHp=document.getElementById('enemyHp');
      enemyHp.innerHTML =`<h3 id='redT'> Hp:` + slime.hp + `</h3>`;
      enemyHp.style.color="red";
      document.getElementById('enemyAtk').innerText =`ATK: ${slime.atk}`;
      document.getElementById('enemyXp').innerText =`xp: ${slime.xp}`;

}
