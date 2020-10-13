import PopupWithForm from './PopupWithForm.js';

export default class PicturePopup extends PopupWithForm {

	constructor({ popupSelector, submitHandler }) {
		super({ popupSelector, submitHandler });
	}

	open() {
		super.open();
	}

	setEventListeners() {
		super.setEventListeners();
	}
}