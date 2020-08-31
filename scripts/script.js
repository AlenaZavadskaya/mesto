const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#popupProfile');
const popupPlace = document.querySelector('#popupPlace');
const popupProfileOpenButton = document.querySelector('.edit-button');
const popupAddButton = document.querySelector('.add-button')
const popupCloseButton = popupProfile.querySelector('.popup__close');
const popupPlaceClose = document.querySelector('#popupPlaceClose');
const profileForm = document.querySelector('.form');
const nameInput = document.querySelector('.form__item_name');
const jobInput = document.querySelector('.form__item_about');
const pictureInput = document.querySelector('.form__item_link');
const titleInput = document.querySelector('.form__item_title');
const formPlaceElement = document.querySelector('#form-card');
const placeNameInput = document.querySelector('.profile__name');
const placeJobInput = document.querySelector('.profile__about');
const popupImage = document.querySelector('#popupImage');
const elementsContainer = document.querySelector('.elements__container');
const elementForm = document.querySelector('#form-card');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');
const popupImagePicture = popupImage.querySelector('.popup-image__img');
const popupImageTitle = popupImage.querySelector('.popup-image__title');


// открыть попап
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
	document.addEventListener('keydown', evt => keyHandler(evt, popupElement));
}

// закрыть попап - х
function closePopup(popupElement) {
	elementForm.reset();
	popupElement.classList.remove('popup_opened');
	document.removeEventListener('keydown', evt => keyHandler(evt, popupElement));
}

// закрыть попап - Overlay
function closeOverlay(popupElement) {
	if (event.target === event.currentTarget) {
		elementForm.reset();
		closePopup(popupElement);
		document.removeEventListener('keydown', evt => keyHandler(evt, popupElement));
	}
}

// закрыть попап - Esc
function keyHandler(evt, popupElement) {
	if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) {
		elementForm.reset();
		closePopup(popupElement);
	}
}

// заполнить текущими данными поля попапа редактирования профиля при его открытии
popupProfileOpenButton.addEventListener('click', function () {
	nameInput.value = placeNameInput.textContent;
	jobInput.value = placeJobInput.textContent;
	openPopup(popupProfile)
});


// Обработчик «отправки» формы редактирования профиля
function handleFormSubmit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 
	// Вставляем новые значения с помощью textContent 
	placeNameInput.textContent = nameInput.value;
	placeJobInput.textContent = jobInput.value;
	closePopup(popupProfile);
}

const initialCards = [
	{
		name: 'Озеро Брайес, Италия',
		link: 'https://images.unsplash.com/photo-1487622750296-6360190669a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
	},
	{
		name: 'Италия',
		link: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
	},
	{
		name: 'Швейцария',
		link: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
	},
	{
		name: 'Новая Зеландия',
		link: 'https://images.unsplash.com/photo-1505302767374-66bca19b3219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
	},
	{
		name: 'Тихий океан',
		link: 'https://images.unsplash.com/photo-1533790062815-de8070c76e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1119&q=80'
	},
	{
		name: 'Гренландия',
		link: 'https://images.unsplash.com/photo-1536846862558-b80d25f0dbae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
	}
];

// создаем карточку и добавляем на каждую слушатели событий
const createCard = (element) => {
	//  клонируем содержимое тега template и наполняем содержимым 
	const cardElement = document.querySelector('#element-template').content.cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');
	const cardTitle = cardElement.querySelector('.element__title');
	const cardRemove = cardElement.querySelector('.element__delete');
	const cardLike = cardElement.querySelector('.element__like')

	cardImage.src = element.link;
	cardTitle.textContent = element.name;
	cardImage.setAttribute('alt', element.name);

	cardImage.addEventListener('click', fillPopupImage);
	cardRemove.addEventListener('click', removeCard);
	cardLike.addEventListener('click', likeCard);

	return cardElement;
};


function addCard(element) {
	elementsContainer.prepend(element);
}

// добавляем карточки на страницу
formPlaceElement.addEventListener('submit', function () {
	event.preventDefault();
	const addedCard = { name: titleInput.value, link: pictureInput.value };
	addCard(createCard(addedCard));
	elementForm.reset();
	closePopup(popupPlace);
});

// заполняем текущими данными поля попапа с картинкой при его открытии
function fillPopupImage() {
	popupImagePicture.src = event.target.src;
	popupImageTitle.textContent = event.target.alt;
	popupImagePicture.setAttribute('alt', event.target.alt);
	openPopup(popupImage);
}

//  удаляем карточку при нажатии на значек
function removeCard(evt) {
	const card = evt.target.closest('.element') // сlosest находит весь блок карточки в разметке
	card.remove();
}

// меняем стиль для лайка
function likeCard(evt) {
	evt.target.classList.toggle('element__like_active');
}

// Прикрепляем обработчик к форме редактирования профиля: 
profileForm.addEventListener('submit', handleFormSubmit);

// Обработчики попапа редактирования профиля
popupCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfile.addEventListener('click', () => closeOverlay(popupProfile));

// Обработчики попапа c местом
popupAddButton.addEventListener('click', () => openPopup(popupPlace));
popupPlaceClose.addEventListener('click', () => closePopup(popupPlace));
popupPlace.addEventListener('click', () => closeOverlay(popupPlace));

// Обработчики попапа c картинкой
popupImage.addEventListener('click', () => closeOverlay(popupImage));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

// первоначальное отображение карточек на странице
initialCards.forEach(function (item) { addCard(createCard(item)); });
