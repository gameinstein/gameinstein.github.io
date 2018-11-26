
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

export class Jump extends Traits {
	constructor() {
		super('jump');
		
		this.ready = 0;
		this.duration = 0.5;
		this.engageTime = 0;
		this.velocity = 5;
		this.requestTime = 0;
		this.gracePeriod = 0.1;
	}
	
	start() {
		this.requestTime = this.gracePeriod;
	}
	
	obstruct(entity, side) {
		if(side === 'bottom') {
			this.ready = 1;
		} else if(side === 'top') {
			this.cancel();
		}
	}

	cancel() {
		this.engageTime = 0;
		this.requestTime = 0;
	}

	update(entity) {		
		if(this.requestTime > 0) {
			if(this.ready > 0) { 	
				this.engageTime = this.duration;
				this.requestTime = 0;
			}
			this.requestTime -= 1/12;
		}

		if(this.engageTime > 0) {
			entity.vel.y = -this.velocity;
			this.engageTime -= 1/20;
		}		
		this.ready--;
	}
}
