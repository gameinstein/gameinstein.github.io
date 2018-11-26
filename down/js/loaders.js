import SpriteSheet from './SpriteSheet.js';
import {createAnim} from './Anim.js';
import Level from './Level.js';
import {createBackgroundLayer, createSpriteLayer, createCollisionLayer} from './layers.js';
import {overworld} from './overworld.js';
import {levelSpec} from './levelSpec.js';
import {createCollisionGrid, createBackgroundGrid} from './backgrounds.js';

export function loadImage(url) {
	return new Promise(resolve => {
		const img = new Image();
		img.addEventListener('load', () => {
			resolve(img);
		});
		img.src = url;
	});
}

export function loadSpritesheet(name) {
	return loadImage(name.image)
	.then(image => {
		const sprite = new SpriteSheet(image, name.width, name.height);
		
		if(name.tiles) {
			name.tiles.forEach(tile => {
				sprite.define(tile.name, tile.index[0], tile.index[1]);
			});			
		}

		if(name.frames) {
			name.frames.forEach(frame => {
				name.frames.forEach(frame => {
					sprite.define(frame.name, frame.rect[0], frame.rect[1]);
				});
			});
		}

		if(name.animations) {
			name.animations.forEach(anim => {
				const animation = createAnim(anim.frames, anim.frameLen);
				sprite.defineAnim(anim.name, animation);
			});
		}
					
		return sprite;
	});
}

export function loadLevel() {
	return loadSpritesheet(overworld)
	.then(sprite => {
		const level = new Level();

		const margedTiles = levelSpec.layers.reduce((margedTiles, layerSpec) => {
			return margedTiles.concat(layerSpec.tiles);
		}, []);
	
		const collisionGrid = createCollisionGrid(
				margedTiles, levelSpec.pattern, level);
			
		level.setCollisionGrid(collisionGrid);
					
		levelSpec.layers.forEach(layer => {
			const backgroundGrid = createBackgroundGrid(
				layer.tiles, levelSpec.pattern);

			const backgroundLayer = createBackgroundLayer(
				level, backgroundGrid, sprite);
				
			level.comp.layers.push(backgroundLayer);
		});
	
		const marioLayer = createSpriteLayer(level.entities);
		const collisionLayer = createCollisionLayer(level);

		level.comp.layers.push(marioLayer);
//		level.comp.layers.push(collisionLayer);
		
		return level;
	});	
}
