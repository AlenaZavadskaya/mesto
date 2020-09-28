import { popupImagePicture, popupImageTitle } from '../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

	constructor(popupSelector) {
		super(popupSelector);
	}

	open(card) {
		this._title = card._title;
		this._image = card._image;

		// заполняем текущими данными поля попапа с картинкой при его открытии
		popupImagePicture.src = this._image;
		popupImageTitle.textContent = this._title;
		popupImagePicture.setAttribute('alt', this._image);
		super.open();
	}
}