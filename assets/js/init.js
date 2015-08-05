var GAME = GAME || {};

GAME.width = 1200,
GAME.height = 1600;
GAME.parent = document.querySelector('#game')

GAME.game = new Phaser.Game(GAME.width, GAME.height,Phaser.AUTO, GAME.parent);

GAME.game.state.add('Load',GAME.Load);
GAME.game.state.add('MainMenu',GAME.MainMenu);
GAME.game.state.add('Game',GAME.Play);
GAME.game.state.add('Lose',GAME.LoseScreen);
GAME.game.state.add('Win',GAME.WinScreen);
GAME.game.state.start('Load');
