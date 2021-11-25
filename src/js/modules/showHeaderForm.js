export default () => {
	const formContainer = document.querySelector(".js-form-container");
	const formShowBtn = document.querySelector(".js-show-form-button");
	const formHideBtn = document.querySelector(".js-hide-form-button");

	formShowBtn.addEventListener("click", () => {
		setTimeout(() => {
			formContainer.classList.add("_is-active");
		}, 200);

		formContainer.querySelector(".header__bottom-block-links").classList.add("_is-hidden");
	});

	formHideBtn.addEventListener("click", () => {
		setTimeout(() => {
			formContainer.querySelector(".header__bottom-block-links").classList.remove("_is-hidden");
			formContainer.querySelector(".header__bottom-block-form-input").value = "";
		}, 200);

		formContainer.classList.remove("_is-active");
	});
}
