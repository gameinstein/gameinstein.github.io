import Compositor from './Compositor.js';
import TileCollider from './TileCollider.js';
import EntityCollider from './EntityCollider.js';

export default class Level {
	constructor() {
		this.timer = 0;
		this.gravity = 0.5;
		this.comp = new Compositor();
		this.entities = new Set();
		this.tileCollider = null;
		this.entityCollider = new EntityCollider(this.entities);
	}

	setCollisionGrid(matrix) {
		this.tileCollider = new TileCollider(matrix);
	}
	
	update() {
		this.entities.forEach(entity => {
			entity.update(this);

			entity.pos.x += entity.vel.x;
			this.tileCollider.checkX(entity);
	
			entity.pos.y += entity.vel.y;
			this.tileCollider.checkY(entity);

			entity.vel.y += this.gravity;
		});

		this.entities.forEach(entity => {
			this.entityCollider.check(entity);			
		});
		this.timer += 1/15;
	}
}