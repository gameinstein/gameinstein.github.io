export default class SpriteSheet {
	constructor(img, w, h) {
		this.img = img;
		this.w = w;
		this.h = h;
		this.tiles = new Map();
		this.animations = new Map();
	}
	
	defineAnim(name, animation) {
		this.animations.set(name, animation);
	}
		
	define(name, x, y) {
		const buffers = [false, true].map(flip => {
			const buffer = document.createElement('canvas');
			buffer.width = this.w;
			buffer.height = this.h;
			const ctx = buffer.getContext('2d');

			if(flip) {
				ctx.scale(-1, 1);
				ctx.translate(-this.w, 0);
			}
	
			ctx.drawImage(this.img, 
				x, y, this.w, this.h, 
				0, 0, this.w, this.h);
				
			return buffer;		
		});
				
		this.tiles.set(name, buffers);
	}

	defineTile(name, x, y) {
		const buffer = document.createElement('canvas');
		buffer.width = this.w;
		buffer.height = this.h;
		const ctx = buffer.getContext('2d');
		
		ctx.drawImage(this.img, 
			x, y, this.w, this.h, 
			0, 0, this.w, this.h);
		
		this.tiles.set(name, buffer);
	}
	
	draw(name, ctx, x, y, flip = false) {
		const buffer = this.tiles.get(name)[flip ? 1 : 0];
		ctx.drawImage(buffer, x, y, this.w, this.h);
	}
	
	drawTile(name, ctx, x, y) {
		this.draw(name, ctx, x * this.w, y * this.h);
	}
	
	drawAnim(name, ctx, x, y, distance) {
		const animation = this.animations.get(name);
		this.drawTile(animation(distance), ctx, x, y);
	}
}
