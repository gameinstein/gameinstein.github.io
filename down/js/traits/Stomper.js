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

export class Stomper extends Traits {
	constructor() {
		super('stomper');
		this.queueBounce = false;
		this.bounceSpeed = 5;
	}

	bounce() {
		this.queueBounce = true;
	}

	update(entity) {
		if(this.queueBounce) {
			entity.vel.y = -this.bounceSpeed;
			this.queueBounce = false;
		}
	}
}
