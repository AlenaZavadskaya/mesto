export class Card {

	constructor(data, templateElement, { handleCardClick }, { deleteCard, addLike, removeLike}, api) {
		this._title = data.name;
	this._image = data.link;
	// debugger
		this._id = data._id;
		this._templateElement = templateElement;
	this._api = api;
	this._ownerId = data.owner._id;
	this._likes = data.likes;
		
		this._handleCardClick = handleCardClick;
		this._deleteCard = deleteCard;
		this._addLike = addLike;
		this._removeLike = removeLike;
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
		// this.setLikesCounter();
		this._setEventListeners();
		
		
		this._cardPicture = this._card.querySelector('.element__image');
		this._cardTitle = this._card.querySelector('.element__title');
		// this._cardBuscet = this._card.querySelector('.element__delete');

		this._cardPicture.src = this._image;
		this._cardTitle.textContent = this._title;
		this._cardPicture.setAttribute('alt', this._title);

		this._counter = this._card.querySelector('.element__counter');
		this._counter.textContent = this._likes.length;
		this.showLike();
		this.showBuscet();
		// Вернём элемент наружу
		return this._card;
	}

	_setEventListeners() {
		this._cardRemove = this._card.querySelector('.element__delete');
		this._cardLike = this._card.querySelector('.element__like');
		this._cardImage = this._card.querySelector('.element__image');
		this._cardImage.addEventListener('click', () => {
			this._handleCardClick(this._card);
		});
		
		this._cardRemove.addEventListener('click', () => {
				
			this._deleteCard(/*this._card*/);
		});

		this._cardLike.addEventListener('click', () => {
						
			if (this._cardLike.classList.contains('element__like_active')) {
				this._removeLike(this._card);
				this._likeCard();
			} else {
				this._addLike(this._card);
				this._likeCard();
			}
			// this._likes.setLikesCounter();
		});
	}

	//  удаляем карточку при нажатии на значек 
	removeCard() {
	//  evt.target.remove();
	
	  this._card.remove();
		this._card = null;
	}

	// меняем стиль для лайка
	_likeCard() {
		// debugger
		this._cardLike.classList.toggle('element__like_active');
		// this.setLikesCounter()element__like_active
	}

	setLikesCounter(data) {
		this._counter = this._card.querySelector('.element__counter');
		this._counter.textContent = data.likes.length;
	}

	showBuscet() {
		this._cardRemove = this._card.querySelector('.element__delete');
		if (this._ownerId === "5ad8ed3cf9172511f7994134") {
			this._cardRemove.classList.toggle('element__delete-active');
			} 
	}

	showLike() {
		this._likes.forEach(element => {
			if (element._id === '5ad8ed3cf9172511f7994134') {
				this._likeCard();
			}
		});
	}

}
