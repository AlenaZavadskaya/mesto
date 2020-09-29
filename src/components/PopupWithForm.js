import Popup from './Popup.js';
import { profileForm, placeForm } from '../utils/constants.js';

export default class PopupWithForm extends Popup {

	constructor({ popupSelector, submitHandler }) {
		super(popupSelector);

		this._submitHandler = submitHandler;
	}

	_getInputValues() {
		const inputList = Array.from(this._popupSelector.querySelectorAll('.form__item'));

		return inputList;
	}

	close() {
		const inputList = this._getInputValues();

		inputList.forEach(element => {
			element.textContent = '';
		});

		super.close();
	}

	setEventListeners() {
		profileForm.addEventListener('submit', this._submitHandler);
		placeForm.addEventListener('submit', this._submitHandler);

		super.setEventListeners();
	}
}