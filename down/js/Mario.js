import {loadSpritesheet} from './loaders.js';

import Entity from './Entity.js';
import {Go} from './traits/Go.js';	
import {Jump} from './traits/Jump.js';	
import {Stomper} from './traits/Stomper.js';
import Killable from './traits/Killable.js';	

export const marioSprite = {
	image: 'img/characters.png',
	width: 16,
	height: 16,
	
	frames: [
		{
			name: 'idle',
			rect: [276, 44]
		},
		{
			name: 'run-1',
			rect: [290, 44]
		},
		{
			name: 'run-2',
			rect: [304, 44]
		},
		{
			name: 'run-3',
			rect: [321, 44]
		},
		{
			name: 'jump',
			rect: [355, 44]
		},
		{
			name: 'break',
			rect: [337, 44]
		},
		{
			name: 'dead',
			rect: [483, 44]
		}
	],
	
	animations: [
		{
			name: 'run',
			frameLen: 10,
			frames: [
				'run-1',
				'run-2',
				'run-3'
			]
		}
	]
};


function createMarioFactory(sprite) {
	const runAnim = sprite.animations.get('run');

	function routeFrame(mario) {
		if(mario.jump.ready < 0) {
			return 'jump';
		}

		if(mario.killable.dead) {
			return 'dead';
		}
	
		if(mario.go.distance > 0) {
			if((mario.vel.x < 0 && mario.go.dir > 0) || 
				(mario.vel.x > 0 && mario.go.dir < 0)) {
				return 'break';
			}
			return runAnim(mario.go.distance);
		}
		return 'idle';
	}

	function drawMario(ctx) {
		sprite.draw(routeFrame(this), ctx, 0, 0, this.go.heading < 0);
	}

	return function createMario() {
		const mario = new Entity();
		mario.pos.set(16, 64);
		mario.size.set(14, 16);
//		mario.offset.set(64, 10);

		mario.addTrait(new Go());
		mario.addTrait(new Jump());
		mario.addTrait(new Stomper());
		mario.addTrait(new Killable());

		mario.draw = drawMario;
				
		return mario;
	}
}

export function loadMario() {
	return loadSpritesheet(marioSprite)
	.then(createMarioFactory);
}
