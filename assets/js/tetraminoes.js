var GAME = GAME || {};

Block = function(game,x,y,type,color,scale){

	this.centerX = x;
  this.centerY = y;
	this.blocktype = type;
  this.blockcolor = color;
  this.game = game;
  this.squares = new Array();
  this.scale = scale;
  this.setupsquares();

};

var md = (width * this.scale ) / 2;

Block.prototype.setupsquares = function(){

		this.squares.length = 0;



		switch(this.blocktype){

			case 'o' : 	this.squares[0] = this.game.add.sprite(this.centerX-md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						break;

			case 't' : 	this.squares[0] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md*3,this.centerY+md,'blocks',this.blockcolor);

						break;

			case 'l' : 	this.squares[0] = this.game.add.sprite(this.centerX-md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX-md,this.centerY+md*3,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md,this.centerY+md*3,'blocks',this.blockcolor);

						break;

			case 'j' : 	this.squares[0] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md*3,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX-md,this.centerY+md*3,'blocks',this.blockcolor);

						break;

			case 'i' :  this.squares[0] = this.game.add.sprite(this.centerX+md,this.centerY-md*3,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md,this.centerY+md*3,'blocks',this.blockcolor);

						break;

			case 's' :  this.squares[0] = this.game.add.sprite(this.centerX+md*3,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX-md,this.centerY+md,'blocks',this.blockcolor);

						break;

			case 'z' :  this.squares[0] = this.game.add.sprite(this.centerX-md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[1] = this.game.add.sprite(this.centerX+md,this.centerY-md,'blocks',this.blockcolor);

						this.squares[2] = this.game.add.sprite(this.centerX+md,this.centerY+md,'blocks',this.blockcolor);

						this.squares[3] = this.game.add.sprite(this.centerX+md*3,this.centerY+md,'blocks',this.blockcolor);

						break;

		}

		for(var i=0;i<this.squares.length;i++){

		this.squares[i].anchor.setTo(0.5,0.5);

		this.squares[i].scale.setTo(this.scale,this.scale)

		}
	}
