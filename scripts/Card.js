import { popupImagePicture, popupImageTitle, openPopup, popupImage } from './index.js';

export class Card {
	constructor(data, templateElement) {
		this._title = data.name;
		this._image = data.link;
		this._templateElement = templateElement;
	}

	_getTemplate() {
		// забираем размеку из HTML и клонируем элемент
		const cardElement = document
			.querySelector(this._templateElement)
			.content
			.cloneNode(true)
			.querySelector('.element')

		// вернём DOM-элемент карточки
		return cardElement;
	}

	generateCard() {
		// Запишем разметку в приватное поле _element. 
		// Так у других элементов появится доступ к ней.
		this._card = this._getTemplate();
		this._setEventListeners();

		this._cardPicture = this._card.querySelector('.element__image');
		this._cardTitle = this._card.querySelector('.element__title');

		this._cardPicture.src = this._image;
		this._cardTitle.textContent = this._title;
		this._cardPicture.setAttribute('alt', this._title);

		// Вернём элемент наружу
		return this._card;
	}

	_setEventListeners() {
		this._cardRemove = this._card.querySelector('.element__delete');
		this._cardLike = this._card.querySelector('.element__like');
		this._cardImage = this._card.querySelector('.element__image');

		this._cardImage.addEventListener('click', () => {
			this._fillPopupImage();
		});

		this._cardRemove.addEventListener('click', () => {
			this._removeCard();
		});

		this._cardLike.addEventListener('click', () => {
			this._likeCard();
		});
	}

	//  удаляем карточку при нажатии на значек 
	_removeCard() {
		this._card.remove();
		this._card = null;
	}

	// меняем стиль для лайка
	_likeCard() {
		this._cardLike.classList.toggle('element__like_active');
	}

	// заполняем текущими данными поля попапа с картинкой при его открытии
	_fillPopupImage() {
		popupImagePicture.src = this._image;
		popupImageTitle.textContent = this._title;
		popupImagePicture.setAttribute('alt', this._image);
		openPopup(popupImage);
	}
}
