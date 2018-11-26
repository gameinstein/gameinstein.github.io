export function setupKeyboard(entity) {
	['keydown', 'keyup'].forEach(eventName => {		
		window.addEventListener(eventName, event => {
			if(event.type === 'keydown') {
				if(event.code === 'KeyW') {
					entity.jump.start();
				}
				if(event.code === 'ArrowRight') {
					entity.go.dir = 1;
				}
				if(event.code === 'ArrowLeft') {
					entity.go.dir = -1;
				}
			} else if(event.type === 'keyup') {
				if(event.code === 'KeyW') {
					entity.jump.cancel();
				}
				if(event.code === 'ArrowRight') {
					entity.go.dir = 0;
				}
				if(event.code === 'ArrowLeft') {
					entity.go.dir = 0;
				}
			}
		});
	});
}
