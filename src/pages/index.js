import './index.css';
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
	config,
	popupWithSubmit,
	popupAvatar,
	popupAvatarOpenButton,
	placeAvatarInput,
	avatarInput,
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit';


const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo(placeNameInput, placeJobInput, placeAvatarInput);
const editForm = new FormValidator(config, '#form-edit');
const cardForm = new FormValidator(config, '#form-card');
const avatarForm = new FormValidator(config, '#form-avatar');



const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-16/',
	headers: {
		authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
		'Content-Type': 'application/json'
	},
});



// отображение информации о пользователе
const apiUser = api.getUserData();
apiUser.then((data) => {
	userInfo.getUserInfo(data);
	userInfo.setUserInfo(data);
})
	.catch((err) => {
		console.log(`Ошибка: ${err}`);
	});


// отображение карточек на странице
const apiCard = api.getInitialCards();
apiCard.then((el) => {
	// debugger
	const cardsList = new Section({
		items: el,
		renderer: (item) => {
			// debugger
			const card = getCard(item);
			// Создаём карточку и возвращаем наружу
			const cardElement = card.generateCard();
			// Добавляем в DOM
			cardsList.addItem(cardElement);
		}
	},
		cardsContainer,
		'https://mesto.nomoreparties.co/v1/cohort-16/cards'
	);
	cardsList.rendererItems();
})
	.catch((err) => {
		console.log(err);
	});


// редактирование информации о пользователе
const profile = new PopupWithForm({
	popupSelector: popupProfile,
	submitHandler: () => {
		debugger
		profile.renderLoading(true); // показываем загрузку на кнопке
		// отправляем запрос на редактирование на сервер
		const apiEditUser = api.editUserData({
			name: nameInput.value, 
			about: jobInput.value 
		});
		apiEditUser.then((data) => {
			userInfo.setUserInfo(data);
			debugger
			profile.renderLoading(false)
			profile.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	}
});


// редактирование аватара
const avatar = new PopupWithForm({
	popupSelector: popupAvatar,
	submitHandler: () => {
		debugger
		avatar.renderLoading(true); // показываем загрузку на кнопке
		const apiUser = api.editAvatar();
		// отправляем запрос на редактирование на сервер
		apiUser.then((data) => {
			const userData = userInfo.getUserInfo(data);
			userInfo.saveUserInfo(userData, placeNameInput, placeJobInput, placeAvatarInput);
			debugger
			avatar.renderLoading(false);
			avatar.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	}
})


// карточка
function getCard(item) {
	const card = new Card(item, '#element-template',
		{
			handleCardClick: () => {
				popupWithImage.open(item);
				popupWithImage.setEventListeners();
			}
		},
		{
			deleteCard: () => { // удаление 
				const popupSubmit = new PopupWithSubmit({
					popupSelector: popupWithSubmit,
					submitHandler: () => {
						const apiDeleteCard = api.deleteCard(card);
						apiDeleteCard.then(() => {
							card.removeCard();
							popupSubmit.close();
						})
							.catch((err) => {
								console.log(`Ошибка: ${err}`);
							});
					}
				});
				popupSubmit.open();
				popupSubmit.setEventListeners();
			},
			addLike: () => { // добавление лайка
				const apiLikeCard = api.addLike(card);
				apiLikeCard.then((data) => {
					card.setLikesCounter(data);
				})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			},
			removeLike: () => { // удаление лайка
				const apiRemoveLike = api.removeLikes(card);
				apiRemoveLike.then((data) => {
					card.setLikesCounter(data);
				})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			}

		},
		'https://mesto.nomoreparties.co/v1/cohort-16/cards');
	return card
}


// добавление новых карточек на страницу
const popupPlaceForm = new PopupWithForm({
	popupSelector: popupPlace,
	submitHandler: () => {
		popupPlaceForm.renderLoading(true); // показываем загрузку на кнопке
		const apiNewCard = api.addCards({
			name: titleInput.value, //
			link: pictureInput.value, //
		});
		apiNewCard.then((data) => {
			const newCards = new Section({
				items: data,
				renderer: (item) => {
					const card = getCard(item);
					// Создаём карточку и возвращаем наружу
					const cardElement = card.generateCard();
					// Добавляем в DOM
					newCards.addItem(cardElement);
				}
			},
				cardsContainer,
				'https://mesto.nomoreparties.co/v1/cohort-16/cards'
			);
			popupPlaceForm.renderLoading(false);
			newCards.renderItem(data);
			popupPlaceForm.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	}
});

// обработчик попапа с аватаром
popupAvatarOpenButton.addEventListener('click', () => {
	avatarForm.disabledValidation(); // очистить ошибки валидации при открытии формы
	avatarForm.disableSubmitButton();
	avatar.open();
	avatar.setEventListeners();
})

// обработчик попапа добавления новых карточек
popupPlaceAddButton.addEventListener('click', () => {
	cardForm.disabledValidation();
	cardForm.disableSubmitButton();
	placeForm.reset();
	popupPlaceForm.open();
	popupPlaceForm.setEventListeners();
});


// обработчик попапа редактирования профиля
popupProfileOpenButton.addEventListener('click', () => {
	editForm.disabledValidation();
	editForm.ableSubmitButton(); 	// включить кнопку
	apiUser.then((data) => {
		const userData = userInfo.getUserInfo(data);
		userInfo.saveUserInfo(userData, nameInput, jobInput, avatarInput);
		nameInput.value = placeNameInput.textContent;
		jobInput.value = placeJobInput.textContent;
		debugger
		profile.open();
		profile.setEventListeners();
	})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
});


editForm.enableValidation();
cardForm.enableValidation();
