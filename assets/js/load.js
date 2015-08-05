var GAME = GAME || {};

GAME.width = 1200;
GAME.height= 1600;
GAME.score = 0;
GAME.force_down_max_time = 500;
var width =30;
var height = 30;

GAME.Load = function(){

}

GAME.Load.prototype.preload = function(){
		this.stage.backgroundColor = "#000";
		// this.preloadtext = this.add.text(this.game.world.centerX,this.game.world.centerY,"Loading..."+this.load.progress+"%",{ font: "20px Arial", fill: "#ff0044", align: "center" });
		// this.preloadtext.anchor.setTo(0.5,0.5);

		this.load.spritesheet('play','assets/images/play.png',100,80);
		this.load.image('pause','assets/images/pause.png');
		this.load.image('title', 'assets/images/title.png')
		this.load.image('reset','assets/images/refresh.png');
		this.load.image('arrow','assets/images/arrows.png');
		this.load.spritesheet('blocks','assets/images/blocks.png',30,30);
		this.load.image('bck','assets/images/background.png');
		this.load.image('win', 'assets/images/win.png');
		this.load.image('lose', 'assets/images/lose.png');
	}

GAME.Load.prototype.create = function(){
        this.game.state.start('MainMenu');
	};
