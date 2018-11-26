import {Vector2} from './Math.js';

export default class Camera {
	constructor() {
		this.pos = new Vector2(0, 0);
		this.size = new Vector2(256, 240);
	}
}
