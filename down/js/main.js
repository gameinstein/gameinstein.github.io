import marioSprite, {loadMario} from './mario.js';
import {goombaSprite, loadGoomba} from './goomba.js';
import {koopaSprite, loadKoopa} from './koopa.js';
import {loadLevel} from './loaders.js';
import {setupKeyboard} from './input.js';

import Camera from './Camera.js';

const canv = document.getElementById('g');
const ctx = canv.getContext('2d');

function loadEntities() {
	const entityFactories = {};
		
	return Promise.all([
		loadGoomba().then(factory => entityFactories['goomba'] = factory),
		loadKoopa().then(factory => entityFactories['koopa'] = factory),
		loadMario().then(factory => entityFactories['mario'] = factory)
	])
	.then(() => entityFactories);
}

Promise.all([
	loadLevel(),
	loadEntities()
])
.then(([level, entity]) => {
	const camera = new Camera();
	const mario = entity.mario();
	const koopa = entity.koopa();
	
	const goomba = entity.goomba();
	goomba.pos.x = 300;
	level.entities.add(goomba);
	
	level.entities.add(koopa);
	koopa.pos.set(240, 64);
	
	level.entities.add(mario);

	setupKeyboard(mario);
/*	
	mario.addTrait({
		NAME: 'hack',
		spawntime: 0,
		obstruct() {
				
		},
		collides() {

		},
		update(mario) {
			if(mario.vel.y < 0 && this.spawntime > 0.1) {
				const spawn = entity.mario();
				spawn.pos.set(mario.pos.x, mario.pos.y);
				spawn.vel.x = mario.vel.x - 1;
				spawn.vel.y = mario.vel.y - 6; 
				level.entities.add(spawn);
				this.spawntime = 0;
			}
			this.spawntime += 1/50;
		}
	});
*/
	function update() {
		if(mario.pos.x > 100) {
			camera.pos.x = mario.pos.x - 100;
		}
		
		level.comp.draw(ctx, camera);
		level.update();
		requestAnimationFrame(update);
	}
	update();
});
