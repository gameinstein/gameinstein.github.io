import {Matrix} from './Math.js';

function* expandSpan(xStart, xLen, yStart, yLen) {
	const xEnd = xStart + xLen;
	const yEnd = yStart + yLen;
	for(let x = xStart; x < xEnd; ++x) {
		for(let y = yStart; y < yEnd; ++y) {
			yield {x, y};
		}
	}	
}

function expandRange(range) {
	if(range.length === 4) {
		const [xStart, xLen, yStart, yLen] = range;
		return expandSpan(xStart, xLen, yStart, yLen);

	}	else if(range.length === 3) {
		const [xStart, xLen, yStart] = range;
		return expandSpan(xStart, xLen, yStart, 1);

	} else if(range.length === 2) {
		const [xStart, yStart] = range;
		return expandSpan(xStart, 1, yStart, 1);
	}	
}

function* expandRanges(ranges) {
	for(const range of ranges) {
		for(const item of expandRange(range)) {
			yield item;
		}
	}
}

function expandTiles(tiles, pattern) {
	const expandedTiles = [];
	
	function walkTiles(tiles, offsetX, offsetY) {
		tiles.forEach(tile => {
			for(const {x, y} of expandRanges(tile.ranges)) {
				const derivedX = x + offsetX;
				const derivedY = y + offsetY;
					
				if(tile.pattern) {
					const tiles = pattern[tile.pattern].tiles;
					walkTiles(tiles, derivedX, derivedY);
				} else {
					expandedTiles.push({
						tile,
						x: derivedX, 
						y: derivedY
					});
				}
			}
		});
	}
	
	walkTiles(tiles, 0, 0);
	return expandedTiles;
}

export function createCollisionGrid(tiles, pattern, level) {
	const grid = new Matrix();
	
	for(const {tile, x, y} of expandTiles(tiles, pattern)) {
		grid.set(x, y, {type: tile.type});
	}	
	
	return grid;
}

export function createBackgroundGrid(tiles, pattern) {
	const grid = new Matrix();
	
	for(const {tile, x, y} of expandTiles(tiles, pattern)) {
		grid.set(x, y, {name: tile.name, x: x, y: y, type: tile.type});
	}	
	
	return grid;
}
