import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import phoneMask from './modules/phoneMask';
import validation from './modules/validation';
import showHeaderForm from './modules/showHeaderForm';
import initDropMenu from './modules/initDropMenu';
import openMobileMenu from './modules/openMobileMenu';

documentReady(() => {
	lazyImages();
	phoneMask();
	validation();
	showHeaderForm();
	initDropMenu();
	openMobileMenu();
});
