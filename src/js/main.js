import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import phoneMask from './modules/phoneMask';
import validation from './modules/validation';
import showHeaderForm from './modules/showHeaderForm';

documentReady(() => {
	lazyImages();
	phoneMask();
	validation();
	showHeaderForm();
});
