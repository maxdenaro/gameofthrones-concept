/* eslint-disable no-inner-declarations */
import vars from '../vars';

if (vars.$window.width() >= 1025) {
	function showMain() {
		return new Promise((resolve) => {
			new TimelineMax({
				onStart() {
					window.scrollTo(0, 0);
					vars.$siteContainer.removeClass('is-outer');
				},
				onComplete: resolve,
			})
				.from(vars.$siteContainer, 0.7, {
					autoAlpha: 0,
					clearProps: 'all',
				})
				.from(vars.$header, 0.5, {
					autoAlpha: 0,
					y: -50,
					clearProps: 'all',
				})
				.from(vars.$heading, 0.5, {
					autoAlpha: 0,
					y: 50,
					clearProps: 'all',
				})
				.from(vars.$date, 0.5, {
					autoAlpha: 0,
					x: -50,
					clearProps: 'all',
				})
				.from(vars.$buttons, 0.5, {
					autoAlpha: 0,
					x: -50,
					clearProps: 'all',
				})
				.from(vars.$descr, 0.5, {
					autoAlpha: 0,
					x: -50,
					clearProps: 'all',
				})
				.from(vars.$arrow, 0.5, {
					autoAlpha: 0,
					x: -50,
					clearProps: 'all',
				});
		});
	}

	showMain();
}

