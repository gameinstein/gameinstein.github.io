import BoundingBox from './BoundingBox.js';
import {Vector2} from './Math.js';

export default class Entity {
	constructor() {
		this.pos = new Vector2(0, 0);
		this.vel = new Vector2(0, 0);
		this.size = new Vector2(0, 0);
		this.offset = new Vector2(0, 0);

		this.bounds = new BoundingBox(this.pos, this.size, this.offset);
	
		this.traits = [];
	}
	
	addTrait(trait) {
		this.traits.push(trait);
		this[trait.NAME] = trait;
	}

	collides(candidate) {
		this.traits.forEach(trait => {
			trait.collides(this, candidate);
		});
	}
	
	obstruct(side) {
		this.traits.forEach(trait => {
			trait.obstruct(this, side);
		});		
	}
	
	update(level) {
		this.traits.forEach(trait => {
			trait.update(this, level);
		});
	}
}
