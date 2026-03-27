/**
 * Enables click-and-drag horizontal scrolling on matching elements.
 *
 * @param {string} target CSS selector used to find slider elements.
 * @returns {void}
 */
export default function dragSlider(target) {
	const sliders = document.querySelectorAll(target);

	if (!sliders.length) return;

	sliders.forEach((slider) => {
		let isDown = false;
		let startX = 0;
		let scrollLeft = 0;

        slider.classList.add('drag-slider');

		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.classList.remove('active');
		});
		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.classList.remove('active');
		});
		slider.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 3; //scroll-fast
			slider.scrollLeft = scrollLeft - walk;
			console.log(walk);
		});
	});
}
