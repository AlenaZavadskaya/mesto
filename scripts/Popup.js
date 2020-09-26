export class Popup {
	constructor(popupSelector) {
		this._popupSelector = popupSelector;
	}
	open() {
	//	debugger
		this._popupSelector.classList.add('popup_opened');
	//	document.addEventListener('keydown', this._handleEscClose);
	document.addEventListener('keydown', () => {
		this._handleEscClose();
	});
	}
	
	close() {
	//	debugger
		this._popupSelector.classList.remove('popup_opened');
		
		document.removeEventListener('keydown', () => {
			this._handleEscClose();
		})
	}
	
	_handleEscClose() {
		//debugger
			if (event.key === 'Escape') {
				
			//	this.close.bind(this._popupSelector);
				this.close();
			}
	}
	
	setEventListeners() {
		
		this._closeButton = this._popupSelector.querySelector('.popup__close');
		
	/*this._closeButton.addEventListener('click', this.close.bind(this._popupSelector));*/
		
		this._closeButton.addEventListener('click', () => {
			this.close();
		})
		
		//document.addEventListener('keydown', this._handleEscClose);
	}
}