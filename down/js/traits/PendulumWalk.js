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

export default class PendulumWalk extends Traits {
	constructor() {
		super('pendulumwalk');

		this.speed = -0.5;
	}

	obstruct(goomba, side) {
		if(side == 'left' || side == 'right') {
			this.speed = -this.speed;
		}		
	}

	collides() {

	}

	update(entity) {
		entity.vel.x = this.speed;
		entity.lifetime += 1/12;
	}
}
