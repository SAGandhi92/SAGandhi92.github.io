var GAME = GAME || {};

GAME.Play = function(){

	this.currentlevel;

};

var oldsquares = new Array();
var squaresinrow = new Array();
var change_rot_time = 0;
var force_down = 0;
var slide_time = 0;
var theme;

var KEYLEFT;
var KEYRIGHT;
var KEYUP;
var KEYDOWN;



GAME.Play.prototype.create =function(){

console.log('works');
		this.bck = this.game.add.sprite(0,0,'bck');
    this.game.world.bounds.x = 21;
    this.game.world.bounds.y = 0;
    this.game.world.bounds.width = 1000;
    this.game.world.bounds.height = 1200;

		theme = this.add.audio('theme');

		this.focusblock = new Block(this.game,this.game.world.centerX,-40,this.chooseblock(),this.choosecolor(),1);
    this.nextblocktype = this.chooseblock();
    this.nextblockcolor = this.choosecolor();
    this.nextblock = new Block(this.game, 330, 271,this.nextblocktype,this.nextblockcolor,0.7);

		KEYRIGHT = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    KEYLEFT = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    KEYUP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		KEYDOWN = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		// this.scoretext = this.add.text(344,355,"SCORE",{ font: "15px Arial", fill: "#ff0044", align: "center" });
    // this.scoretext.anchor.setTo(0.5,0.5);
    // this.scoretextmain = this.add.text(344,370," "+score+" ",{ font: "15px Arial", fill: "#fff", align: "center" })

    this.resetbutton = this.add.sprite(320,520,'reset');
    this.pausebutton = this.add.sprite(320,460,'pause');
		this.pausebutton.inputEnabled = true;
    this.resetbutton.inputEnabled = true;
    this.pausebutton.events.onInputDown.add(this.pausebuttondown,this.pausebutton);
    this.resetbutton.events.onInputDown.add(this.resetbuttondown,this.resetbutton);

		oldsquares.length = 0;
    squaresinrow.length = 0;
    // score = 0;
	}

	GAME.Play.prototype.pausebuttondown =function(){

		if(this.game.paused==false)

		{
			this.game.paused = true;
		}

		else
		{ this.game.paused = false;
		}
	}



	GAME.Play.prototype.resetbuttondown = function(){

		this.game.state.start('Menu');

	},


	GAME.Play.prototype.chooseblock = function(){

		var x = Math.floor(Math.random()*7);

		switch(x){

			case 0 : return 'o';
			case 1 : return 't';
			case 2 : return 'l';
			case 3 : return 'j';
			case 4 : return 'i';
			case 5 : return 's';
			case 6 : return 'z';

		}

	}

	GAME.Play.prototype.choosecolor = function(){
  return Math.floor(Math.random()*5);

}

GAME.Play.prototype.update = function(){
	console.log('update')
	if(this.game.time.now > force_down){
		if (this.focusblock.wallcollid != true)
			this.focusblock.move('down');
		else{
			for (var i=0; i<4; i++){
				oldsquares.push(this.focusblock.squares[i]);
			}
			this.focusblock = new Block (this.game.world.centerX, -40, this.nextblocktype, this.nextblockcolor, 1);
			this.nextblocktype = this.chooseblock();
			this.nextblockcolor= this.choosecolor();

			for(var i=0; i<4; i++){
				this.nextblock.squares[i].destroy();
			}
			this.nextblock = new Block(this.game, 330, 271, this.nextblocktype, this.nextblockcolor, 0.7);

			if(this.focusblock.wallcollide(oldsquares, 'down')== true{this.game.state.start('Lose');})
		}
		this.checkcompletedlines();
		// this.scoretextmain.setText(score);
	}
}
