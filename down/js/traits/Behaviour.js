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

export default class Behaviour extends Traits{
	constructor() {
		super('behaviour');
	}

	collides(us, them) {
		if(us.killable.dead) {
			return;
		}

		if(them.stomper) {
			if(them.vel.y > us.vel.y) {
				us.killable.kill();
				them.stomper.bounce();
				us.pendulumwalk.speed = 0;			
			} else {
				them.killable.kill();
			}
		}
	}
}
