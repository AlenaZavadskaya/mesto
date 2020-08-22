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
const templateImage = document.querySelector('.element__image');
const templateTitle = document.querySelector('.element__title');
const elementForm = document.querySelector('#form-card');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');


// открыть попап
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
}

// закрыть попап - х
function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
}
// закрыть попап - х
function closeOverlay(popupElement) {
	if (event.target === event.currentTarget) {
		popupElement.classList.remove('popup_opened');
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
	cardElement.querySelector('.element__image').src = element.link;
	cardElement.querySelector('.element__title').textContent = element.name;
	cardElement.querySelector('.element__image').setAttribute('alt', element.name);

	cardElement.querySelector('.element__image').addEventListener('click', fillPopupImage);
	cardElement.querySelector('.element__delete').addEventListener('click', removeCard);
	cardElement.querySelector('.element__like').addEventListener('click', likeCard);

	return cardElement;
};


function addCard(element) {
	document.querySelector('.elements__container').prepend(element);
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
	popupImage.querySelector('.popup-image__img').src = event.target.src;
	popupImage.querySelector('.popup-image__title').textContent = event.target.alt;
	popupImage.querySelector('.popup-image__img').setAttribute('alt', event.target.alt);
	openPopup(popupImage);
};

//  удаляем карточку при нажатии на значек
function removeCard(evt) {
	const card = evt.target.closest('.element') // сlosest находит весь блок карточки в разметке
	card.remove();
};

// меняем стиль для лайка
function likeCard(evt) {
	evt.target.classList.toggle('element__like_active');
};

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
