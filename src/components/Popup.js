export default class Popup {

	constructor(popupSelector) {

		this._popupSelector = popupSelector;
	}

	open() {
		this._popupSelector.classList.add('popup_opened');

		document.addEventListener('keydown', this._handleEscClose.bind(this));
	}

	close() {
		this._popupSelector.classList.remove('popup_opened');

		document.removeEventListener('keydown', this._handleEscClose.bind(this));
	}

	_handleEscClose() {
		if (event.key === 'Escape') {
			this.close();
		}
	}

	_handleOverlayClose() {
		if (event.target === event.currentTarget) {
			this.close();
		}
	}

	setEventListeners() {
		this._closeButton = this._popupSelector.querySelector('.popup__close');

		this._closeButton.addEventListener('click', () => {
			this.close();
		})

		this._popupSelector.addEventListener('mousedown', () => {
			this._handleOverlayClose();
		});
	}
}
