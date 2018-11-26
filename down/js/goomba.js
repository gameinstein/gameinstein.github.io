import {loadSpritesheet} from './loaders.js';
import Entity from './Entity.js';
import Behaviour from './traits/Behaviour.js';
import PendulumWalk from './traits/PendulumWalk.js';
import Killable from './traits/Killable.js';

export const goombaSprite = {
	image: 'img/characters.png',
	width: 16,
	height: 16,
	
	frames: [
		{
			name: 'walk-1',
			rect: [296, 187]
		},
		{
			name: 'walk-2',
			rect: [315, 187]
		},
		{
			name: 'flat',
			rect: [277, 187]
		}
	],
	
	animations: [
		{
			name: 'walk',
			frameLen: 1,
			frames: [
				'walk-1',
				'walk-2'
			]
		}
	]
};

function createGoombaFactory(sprite) {
	const walkAnim = sprite.animations.get('walk');
	
	function routeAnim(goomba) {
		if(goomba.killable.dead) {
			return 'flat';
		}

		return walkAnim(goomba.lifetime);
	}

	function drawGoomba(ctx) {
		sprite.draw(routeAnim(this), ctx, 0, 0);
	}

	return function createGoomba() {
		const goomba = new Entity();
		goomba.size.set(16, 16);
		goomba.lifetime = 0;
		
		goomba.addTrait(new PendulumWalk());
		goomba.addTrait(new Behaviour());
		goomba.addTrait(new Killable());

		goomba.update();
	
		goomba.draw = drawGoomba;
				
		return goomba;
	}
}

export function loadGoomba() {
	return loadSpritesheet(goombaSprite)
	.then(createGoombaFactory);
}
