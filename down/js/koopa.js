import {loadSpritesheet} from './loaders.js';
import Entity from './Entity.js';
import PendulumWalk from './traits/PendulumWalk.js';
import Killable from './traits/Killable.js';

export const koopaSprite = {
	image: 'img/characters.png',
	width: 16,
	height: 24,
	
	frames: [
		{
			name: 'walk-1',
			rect: [296, 206]
		},
		{
			name: 'walk-2',
			rect: [315, 206]
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

export class Traits {
	constructor(name) {
		this.NAME = name;
	} 

	collides(us, them) {

	}
	
	obstruct() {
		
	}
	
	update() {

	}
}

const STATE_HIDING = Symbol('hiding');
const STATE_WALKING = Symbol('walking');

export default class Behaviour extends Traits{
	constructor() {
		super('behaviour');

		this.state = STATE_WALKING;
	}

	collides(us, them) {
		if(us.killable.dead) {
			return;
		}

		if(them.stomper) {
			if(them.vel.y > us.vel.y) {
				this.handleStomp(us, them);
				them.stomper.bounce();			
			} else {
				them.killable.kill();
			}
		}
	}

	handleStomp(us, them) {
		if(this.state = STATE_WALKING) {
			this.hide(us);
		}
	}

	hide(us) {
		us.vel.x = 0;
		us.pendulumwalk.speed = 0;
		us.state = STATE_HIDING;
	}
}

function createKoopaFactory(sprite) {
	const walkAnim = sprite.animations.get('walk');
	
	function routeAnim(koopa) {
		return walkAnim(koopa.lifetime);
	}

	function drawKoopa(ctx) {
		sprite.draw(routeAnim(this), ctx, 0, 0, this.vel.x < 0);
	}

	return function createKoopa() {
		const koopa = new Entity();
		koopa.size.set(16, 16);
		koopa.offset.set(0, 8);
		koopa.lifetime = 0;
		
		koopa.addTrait(new PendulumWalk());
		koopa.addTrait(new Behaviour());
		koopa.addTrait(new Killable());
		
		koopa.draw = drawKoopa;
				
		return koopa;
	}
}

export function loadKoopa() {
	return loadSpritesheet(koopaSprite)
	.then(createKoopaFactory);
}
