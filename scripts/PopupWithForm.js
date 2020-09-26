import { Popup } from './Popup.js';
import { profileForm, formPlaceElement } from '../pages/index.js';

export default class PopupWithForm extends Popup {
	constructor({ popupSelector, submitHandler }) {
		super(popupSelector);
		this._popupSelector = popupSelector;
		this._submitHandler = submitHandler;
		//debugger
		// + колбэк сабмита формы;
	}
	_getInputValues() {
		const inputList = Array.from(this._popupSelector.querySelectorAll('.form__item'));
		return inputList;
	}
	
	close() {
		const inputList = this._getInputValues();
		debugger
		inputList.forEach(element => {
			element.textContent = '';
		});
		// this._form = this._popupSelector.querySelector('.form');
		// this._form.reset();
		super.close();
	}
		
	setEventListeners() {
		debugger
		profileForm.addEventListener('submit', this._submitHandler);
		formPlaceElement.addEventListener('submit', this._submitHandler);

		super.setEventListeners();
	}
}