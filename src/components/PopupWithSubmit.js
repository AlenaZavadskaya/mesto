import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {

	constructor({ popupSelector, submitHandler }) {
		super(popupSelector);

		this._submitHandler = submitHandler;
		this._formSubmitHandler = this._formSubmitHandler.bind(this);
	}

	_formSubmitHandler(evt) {
		evt.preventDefault();
		this._submitHandler();
	}

		setEventListeners() {
		this._popupSelector.addEventListener('submit', this._formSubmitHandler);
		super.setEventListeners();
	}
}