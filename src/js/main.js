import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import phoneMask from './modules/phoneMask';
import validation from './modules/validation';

documentReady(() => {
	lazyImages();
	phoneMask();
	validation();
});
