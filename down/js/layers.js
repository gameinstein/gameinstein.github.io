import TileResolver from './TileResolver.js';

export function createBackgroundLayer(level, tiles, sprite) {
	const resolver = new TileResolver(tiles);
	
	const buffer = document.createElement('canvas');
	buffer.width = 256;
	buffer.height = 240;
	const bgCtx = buffer.getContext('2d');
	
	function redraw(startIndex, endIndex) {
		for(let x = startIndex; x <= endIndex; ++x) {
			const col = tiles.grid[x];
			if(col) {
				col.forEach((tile, y) => {
					if(tile.name === 'chance') {
						sprite.drawAnim(tile.name, bgCtx, x - startIndex, y,level.timer);
					} else {
						sprite.drawTile(tile.name, bgCtx, x - startIndex, y);
					}
				});
			}
		}
	}
	
	return function(ctx, camera) {
		bgCtx.clearRect(0, 0, 256, 240);
		const drawFrom = resolver.toIndex(camera.pos.x);
		const drawWidth = resolver.toIndex(camera.size.x);
		const drawTo = drawFrom + drawWidth;
		
		redraw(drawFrom, drawTo);
		ctx.drawImage(buffer, -camera.pos.x % 16, -camera.pos.y);
	};
}

export function createSpriteLayer(entities) {
	const buffer = document.createElement('canvas');
	buffer.width = 32;
	buffer.height = 32;
	const bufferCtx = buffer.getContext('2d');
	
	return function(ctx, camera) {
		entities.forEach(entity => {
			bufferCtx.clearRect(0, 0, 32, 32);
			
			entity.draw(bufferCtx);
			
			ctx.drawImage(buffer, 
				entity.pos.x - camera.pos.x,
				entity.pos.y - camera.pos.y);
		});
	}
}

export function createCollisionLayer(level) {
	const resolvedTiles = [];

	const tileResolver = level.tileCollider.tiles;
	const tileSize = 16;
	
	const getByIndexOriginal = tileResolver.getByIndex;
	
	tileResolver.getByIndex = function getByIndexfake(x, y) {
		resolvedTiles.push({x, y});
		return getByIndexOriginal.call(tileResolver, x, y);	
	}
	
	return function drawCollision(ctx, camera) {
		ctx.strokeStyle = 'blue';
		resolvedTiles.forEach(({x, y}) => {
			ctx.beginPath();
			ctx.rect(x * tileSize - camera.pos.x, 
				y * tileSize - camera.pos.y, 
				tileSize, tileSize);
			ctx.stroke();
		});
		
		ctx.strokeStyle = 'red';
		level.entities.forEach(entity => {
			ctx.beginPath();
			ctx.rect(
				entity.pos.x - camera.pos.x, 
				entity.pos.y - camera.pos.y, 
				entity.size.x, 
				entity.size.y);
			ctx.stroke();			
		});
		
		resolvedTiles.length = 0;
	};
}
