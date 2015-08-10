var GAME = GAME || {};

GAME.width = 400;
GAME.height= 600;
GAME.score = 0;
var force_down_max_time = 500;
var width =30;
var height = 30;

GAME.Load = function(){

}

GAME.Load.prototype.preload = function(){
		this.stage.backgroundColor = "#FFFFFF";
		// this.preloadtext = this.add.text(this.game.world.centerX,this.game.world.centerY,"Loading..."+this.load.progress+"%",{ font: "20px Arial", fill: "#ff0044", align: "center" });
		// this.preloadtext.anchor.setTo(0.5,0.5);

		this.load.spritesheet('play','assets/images/play.png',80,60);
		this.load.audio('theme', 'assets/audio/theme.mp3');
		this.load.spritesheet('pause','assets/images/pause.png');
		this.load.spritesheet('title', 'assets/images/title.png');
		this.load.spritesheet('reset','assets/images/refresh.png');
		this.load.spritesheet('arrow','assets/images/arrows.png');
		this.load.spritesheet('blocks','assets/images/blocks.png',30,30);
		this.load.image('bck','assets/images/background.png');
		this.load.image('win', 'assets/images/win.png');
		this.load.image('lose', 'assets/images/lose.png');
	}

GAME.Load.prototype.create = function(){
        this.game.state.start('MainMenu');
	};
