import './pages/index.css';
import {
	popupProfile,
	popupPlace,
	popupProfileOpenButton,
	popupPlaceAddButton,
	nameInput,
	jobInput,
	pictureInput,
	titleInput,
	placeForm,
	placeNameInput,
	placeJobInput,
	popupImage,
	cardsContainer,
	initialCards
} from './utils/constants.js';
import { Card } from './components/Card.js';
import { config, FormValidator } from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';



const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo(placeNameInput, placeJobInput);
const editForm = new FormValidator(config, '#form-edit');
const cardForm = new FormValidator(config, '#form-card');


const profile = new PopupWithForm({
	popupSelector: popupProfile,
	submitHandler: () => {
		userInfo.setUserInfo(nameInput, jobInput);
		profile.close();
	}
});

// добавляем изначальный массив карточек на страницу
const cardsList = new Section({
	items: initialCards,
	renderer: (item) => {
		const card = new Card(item, '#element-template', {
			handleCardClick: () => {
				popupWithImage.open(card);
				popupWithImage.setEventListeners();
			}
		});
		// Создаём карточку и возвращаем наружу
		const cardElement = card.generateCard();
		// Добавляем в DOM
		cardsList.addItem(cardElement);

	}
},
	cardsContainer
);

// добавление новых карточек на страницу
const popupPlaceForm = new PopupWithForm({
	popupSelector: popupPlace,
	submitHandler: () => {
		const cardAdd = { name: titleInput.value, link: pictureInput.value };
		const newCards = new Section({
			items: cardAdd,
			renderer: (item) => {
				const card = new Card(item, '#element-template', {
					handleCardClick: () => {
						popupWithImage.open(card);
						popupWithImage.setEventListeners();
					}
				});
				// Создаём карточку и возвращаем наружу
				const cardElement = card.generateCard();
				// Добавляем в DOM
				newCards.addItem(cardElement);
			}
		},
			cardsContainer
		);
		newCards.renderItem(cardAdd);
		popupPlaceForm.close();
	}
});


popupPlaceAddButton.addEventListener('click', () => {
	cardForm.disabledValidation();
	cardForm.disableSubmitButton('#addCard');
	placeForm.reset();
	popupPlaceForm.open();
	popupPlaceForm.setEventListeners();
});

// заполнить текущими данными поля попапа редактирования профиля при его открытии 
popupProfileOpenButton.addEventListener('click', () => {
	// очистить ошибки валидации при открытии формы
	editForm.disabledValidation();
	// включить кнопку
	editForm.ableSubmitButton();

	const userProfileInfo = userInfo.getUserInfo();
	nameInput.value = userProfileInfo.name;
	jobInput.value = userProfileInfo.info;

	profile.open();
	profile.setEventListeners();
});


editForm.enableValidation();
cardForm.enableValidation();


// первоначальное отображение карточек
cardsList.rendererItems();


