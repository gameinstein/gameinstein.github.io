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

export class Go extends Traits {
	constructor() {
		super('go');
		
		this.dir = 0;
		this.acceleration = 0.165;
		this.deceleration = 0.12;
		this.dragFactor = 1/80;
		this.distance = 0;
		this.heading = 1;
	}
	
	update(entity) {
		if(this.dir !== 0) {
			entity.vel.x += this.dir * this.acceleration;
			this.heading = this.dir;
		} else if(entity.vel.x !== 0) {
				const decel = Math.min(Math.abs(entity.vel.x), this.deceleration);
				entity.vel.x += entity.vel.x > 0 ? -decel : decel;
		} else {
			this.distance = 0;
		}
		
		const drag = this.dragFactor * entity.vel.x * Math.abs(entity.vel.x);
		entity.vel.x -= drag;
		this.distance += Math.abs(entity.vel.x);
	}
}
