import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default () => {
	const openMenuBtn = document.querySelector(".js-open-mob-menu-btn");
	const mobileMenu = document.querySelector(".mobile-nav");
	const bodyElem = document.querySelector('body');
	let flag = false;

	openMenuBtn.addEventListener("click", (e) => {
		let self = e.currentTarget;
		switch (flag) {
			case false:
				self.classList.add("_is-active");
				self.closest(".header__top-block-info-wrap").classList.add("_is-active");
				mobileMenu.classList.add("_is-open");
				bodyElem.classList.add("mod-no-scroll");
				// disableBodyScroll(mobileMenu);
				flag = true;
				break;
			case true:
				self.classList.remove("_is-active");
				self.closest(".header__top-block-info-wrap").classList.remove("_is-active");
				mobileMenu.classList.remove("_is-open");
				bodyElem.classList.remove("mod-no-scroll");
				// clearAllBodyScrollLocks();
				flag = false;
				break;
		}
	});
}
