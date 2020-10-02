import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

	constructor(popupSelector) {
		super(popupSelector);

		this._popupPicture = popupSelector.querySelector('.popup-image__img');
		this._popupTitle = popupSelector.querySelector('.popup-image__title');
	}

	open(card) {
		this._title = card._title;
		this._image = card._image;

		// заполняем текущими данными поля попапа с картинкой при его открытии
		this._popupPicture.src = this._image;
		this._popupTitle.textContent = this._title;
		this._popupPicture.setAttribute('alt', this._image);
		super.open();
	}
}