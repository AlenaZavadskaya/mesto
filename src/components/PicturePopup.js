import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';

export default class PicturePopup extends PopupWithForm {

	constructor({ popupSelector, submitHandler }) {
		super({ popupSelector, submitHandler });
	}

	open() {
		super.open();
	}

	setEventListeners() {
		// this._popupSelector.addEventListener('submit', this._formSubmitHandler);
		// this._cardRemove = this._card.querySelector('.element__delete');
		// this._cardRemove.addEventListener('click', () => {
		// 		this.open();
		// 	});

		super.setEventListeners();
	}
}