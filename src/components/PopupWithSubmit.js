import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {

	constructor({ popupSelector, submitHandler }) {
		super(popupSelector);

		this._submitHandler = submitHandler;
	}

		setEventListeners() {
		
		this._popupSelector.addEventListener('submit', this._submitHandler);

		super.setEventListeners();
	}
}