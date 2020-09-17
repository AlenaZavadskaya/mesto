import { Card } from './Card.js';
export { popupImagePicture, popupImageTitle, openPopup, popupImage };
import { config, FormValidator } from './FormValidator.js';

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
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');
const popupImagePicture = popupImage.querySelector('.popup-image__img');
const popupImageTitle = popupImage.querySelector('.popup-image__title');
const cardsContainer = document.querySelector('.elements__container');


// открыть попап  
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
	document.addEventListener('keydown', escapeClose);
}

// открыть попап добавления карточек 
function openPopupPlace(formPopup) {
	cardForm.disabledValidation();
	formPlaceElement.reset();
	cardForm.disableSubmitButton('#addCard');
	formPopup.classList.add('popup_opened');
	document.addEventListener('keydown', escapeClose);
}

// закрыть попап - х 
function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
	document.removeEventListener('keydown', escapeClose);
}

// закрыть попап - Overlay 
function closeOverlay(event, popupElement) {
	if (event.target === event.currentTarget) {
		closePopup(popupElement);
	}
}

// закрыть попап - Escape
function escapeClose(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
	}
}

// заполнить текущими данными поля попапа редактирования профиля при его открытии 
popupProfileOpenButton.addEventListener('click', function () {
	// очистить ошибки валидации при открытии формы
	editForm.disabledValidation();
	// включить кнопку
	editForm.ableSubmitButton();
	nameInput.value = placeNameInput.textContent;
	jobInput.value = placeJobInput.textContent;
	openPopup(popupProfile);
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

// добавляем карточки на страницу 
formPlaceElement.addEventListener('submit', function (event) {
	event.preventDefault();
	const cardAdd = { name: titleInput.value, link: pictureInput.value };
	addedCard(cardAdd);

	closePopup(popupPlace);
});

// добавляем карточки на страницу 
function addedCard(item) {
	const card = new Card(item, '#element-template');
	// Создаём карточку и возвращаем наружу
	const cardElement = card.generateCard();
	// Добавляем в DOM
	cardsContainer.prepend(cardElement);
}

// Создаем экземпляы класса валидации форм
const editForm = new FormValidator(config, '#form-edit');
const cardForm = new FormValidator(config, '#form-card');

editForm.enableValidation();
cardForm.enableValidation();


// первоначальное отображение карточек
initialCards.forEach((item) => {
	addedCard(item);
})


// Прикрепляем обработчик к форме редактирования профиля:  
profileForm.addEventListener('submit', handleFormSubmit);

// Обработчики попапа редактирования профиля 
popupCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfile.addEventListener('click', () => closeOverlay(event, popupProfile));

// Обработчики попапа c местом 
popupAddButton.addEventListener('click', () => openPopupPlace(popupPlace));
document.querySelector('#addCard').addEventListener('submit', () => resetFormPopup(popupPlace));
popupPlaceClose.addEventListener('click', () => closePopup(popupPlace));
popupPlace.addEventListener('click', () => closeOverlay(event, popupPlace));


// Обработчики попапа c картинкой 
popupImage.addEventListener('click', () => closeOverlay(event, popupImage));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

