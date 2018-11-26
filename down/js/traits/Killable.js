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

export default class Killable extends Traits {
	constructor() {
		super('killable');
		this.dead = false;
		this.deadTime = 0;
		this.deleteAfter = 2;
	}

	kill() {
		this.dead = true;
	}

	update(entity, level) {
		if(this.dead) {
			this.deadTime += 1/30;
			if(this.deadTime > this.deleteAfter) {
				level.entities.delete(entity);
			}
		}
	}
}
